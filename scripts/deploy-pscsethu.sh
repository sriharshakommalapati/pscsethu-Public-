#!/usr/bin/env bash
set -e

# ==============================================================================
# PSC SETHU PRODUCTION DEPLOYMENT RUNNER
# Policy: Deploy ONLY to www.pscsethu.com. NEVER deploy to www.pscsethu.in.
# ==============================================================================

TARGET_DOMAIN="www.pscsethu.com"
FORBIDDEN_DOMAIN="www.pscsethu.in"

echo "============================================================"
echo "🚀 Initiating PSC Sethu Deployment Pipeline"
echo "Target Domain: $TARGET_DOMAIN"
echo "Forbidden Domain: $FORBIDDEN_DOMAIN"
echo "============================================================"

# Enforce strict policy check
if [ "$1" == "$FORBIDDEN_DOMAIN" ] || [ "$1" == "pscsethu.in" ]; then
  echo "❌ CRITICAL ERROR: Deploying to $FORBIDDEN_DOMAIN is prohibited by configuration."
  echo "Exiting immediately."
  exit 1
fi

echo "📦 1. Building production web bundle..."
npm run build

echo "🏷️  2. Writing canonical CNAME to dist/CNAME ($TARGET_DOMAIN)..."
echo "$TARGET_DOMAIN" > dist/CNAME

echo "📄 3. Syncing ads.txt for monetization on $TARGET_DOMAIN..."
cp public/ads.txt dist/ads.txt || true

echo "✅ 4. Verifying build output..."
if [ ! -f dist/index.html ]; then
  echo "❌ Error: dist/index.html does not exist!"
  exit 1
fi

echo "🎉 Deployment artifacts ready for $TARGET_DOMAIN!"
echo "Target: https://$TARGET_DOMAIN"
echo "============================================================"
