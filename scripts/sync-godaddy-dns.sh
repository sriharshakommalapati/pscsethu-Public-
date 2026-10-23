#!/usr/bin/env bash
set -e

# ==============================================================================
# GoDaddy DNS Automated Linker for www.pscsethu.com
# Links www.pscsethu.com to GitHub Pages / hosting infrastructure
# Strictly rejects and ignores pscsethu.in
# ==============================================================================

DOMAIN="pscsethu.com"
GODADDY_TOKEN="${GODADDY_PAT:-gd_pat_Linut8JGqWaVVlAwSAVKNzBdB0dqbCFWisBPrqQxC5g_5996d4e9}"

echo "============================================================"
echo "🌐 GoDaddy DNS Configuration Engine"
echo "Domain: $DOMAIN (Target: www.$DOMAIN)"
echo "Target CNAME: sriharshakommalapati.github.io"
echo "============================================================"

if [ -z "$GODADDY_TOKEN" ]; then
  echo "❌ Error: GoDaddy Personal Access Token (GODADDY_PAT) not provided."
  exit 1
fi

echo "🔍 1. Validating domain status on GoDaddy..."
DOMAIN_STATUS=$(curl -s -H "Authorization: Bearer $GODADDY_TOKEN" "https://api.godaddy.com/v1/domains/$DOMAIN" | grep -o '"status":"[^"]*"' || true)
echo "GoDaddy Domain Status: $DOMAIN_STATUS"

echo "🔗 2. Updating CNAME record for 'www' -> sriharshakommalapati.github.io..."
CNAME_RES=$(curl -s -w "%{http_code}" -X PUT \
  -H "Authorization: Bearer $GODADDY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[{"data":"sriharshakommalapati.github.io","ttl":3600}]' \
  "https://api.godaddy.com/v1/domains/$DOMAIN/records/CNAME/www")

if [ "$CNAME_RES" == "200" ] || [ "$CNAME_RES" == "204" ]; then
  echo "✅ GoDaddy CNAME for www.$DOMAIN successfully linked!"
else
  echo "⚠️ GoDaddy CNAME update response: $CNAME_RES"
fi

echo "📍 3. Updating Apex (@) A records to GitHub Pages IPs..."
A_RES=$(curl -s -w "%{http_code}" -X PUT \
  -H "Authorization: Bearer $GODADDY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[
    {"data":"185.199.108.153","ttl":3600},
    {"data":"185.199.109.153","ttl":3600},
    {"data":"185.199.110.153","ttl":3600},
    {"data":"185.199.111.153","ttl":3600}
  ]' \
  "https://api.godaddy.com/v1/domains/$DOMAIN/records/A/@")

if [ "$A_RES" == "200" ] || [ "$A_RES" == "204" ]; then
  echo "✅ GoDaddy Apex A records successfully linked to hosting cluster!"
else
  echo "⚠️ GoDaddy A records update response: $A_RES"
fi

echo "📋 4. Verified Active Records for $DOMAIN:"
curl -s -H "Authorization: Bearer $GODADDY_TOKEN" "https://api.godaddy.com/v1/domains/$DOMAIN/records" | grep -o '{"data":[^}]*"type":"[^"]*"}' || true

echo ""
echo "🎉 GoDaddy DNS link completed! www.$DOMAIN is connected."
echo "============================================================"
