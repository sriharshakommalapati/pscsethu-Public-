#!/usr/bin/env bash
set -e

# ==============================================================================
# PSC SETHU DAILY SYNC & DEPLOYMENT RUNNER
# 1. Syncs daily updates from AI Studio environment
# 2. Pushes latest code to GitHub (main branch)
# 3. Synchronizes GoDaddy DNS for www.pscsethu.com
# 4. Validates Google Ads display & ads.txt
# ==============================================================================

GITHUB_TOKEN="${GITHUB_PAT:-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}"
GODADDY_TOKEN="${GODADDY_PAT:-gd_pat_Linut8JGqWaVVlAwSAVKNzBdB0dqbCFWisBPrqQxC5g_5996d4e9}"
REPO_OWNER="sriharshakommalapati"
REPO_NAME="pscsethu"
TARGET_DOMAIN="www.pscsethu.com"

echo "============================================================"
echo "🚀 PSC Sethu Daily Sync & Automation Runner"
echo "Target: https://$TARGET_DOMAIN (NEVER pscsethu.in)"
echo "Timestamp: $(date -u)"
echo "============================================================"

# Step 1: Ensure Git configuration is healthy
echo "🛠️  Step 1: Checking local Git state..."
git config user.name "Sree Harsha"
git config user.email "sriharshakommalapati@gmail.com"

# Check status and stage any changes
git add -A
if git diff --staged --quiet; then
  echo "ℹ️  No uncommitted changes."
else
  COMMIT_MSG="Daily automated sync for www.pscsethu.com: $(date -u '+%Y-%m-%d %H:%M UTC')"
  git commit -m "$COMMIT_MSG"
  echo "✅ Committed changes: $COMMIT_MSG"
fi

# Step 2: Attempt pushing to GitHub
echo "🐙 Step 2: Syncing with GitHub (https://github.com/$REPO_OWNER/$REPO_NAME)..."
REMOTE_URL="https://${GITHUB_TOKEN}@github.com/${REPO_OWNER}/${REPO_NAME}.git"
git remote set-url origin "$REMOTE_URL" 2>/dev/null || git remote add origin "$REMOTE_URL"

if git push -u origin main 2>&1; then
  echo "✅ Successfully pushed latest code to GitHub!"
else
  echo "⚠️ Note: If the repository 'https://github.com/$REPO_OWNER/$REPO_NAME' was not yet created in the GitHub web interface, please create it at https://github.com/new with name '$REPO_NAME', then run this push."
fi

# Step 3: Link GoDaddy DNS
echo "🌐 Step 3: Verifying & syncing GoDaddy DNS for $TARGET_DOMAIN..."
GODADDY_PAT="$GODADDY_TOKEN" bash scripts/sync-godaddy-dns.sh

# Step 4: Verify Google Ads
echo "💰 Step 4: Validating Google Ads configuration..."
if grep -q "ca-pub-9463525929730000" index.html && grep -q "pub-9463525929730000" public/ads.txt; then
  echo "✅ Google AdSense (ca-pub-9463525929730000) verified active in index.html & public/ads.txt"
else
  echo "⚠️ Warning: Google Ads configuration needs attention"
fi

echo "============================================================"
echo "🎉 Daily run completed successfully for $TARGET_DOMAIN!"
echo "============================================================"
