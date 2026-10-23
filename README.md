# PSC Sethu - All India State PSC & UPSC Study Portal

Production Domain: [https://www.pscsethu.com](https://www.pscsethu.com)  
Deployment Policy: **Strictly `www.pscsethu.com` ONLY** (Deployments to `pscsethu.in` are permanently disabled and prohibited).

---

## 🌐 GoDaddy DNS Configuration

The GoDaddy DNS for `pscsethu.com` is synchronized via the GoDaddy REST API:

- **Domain**: `pscsethu.com` (Status: `ACTIVE`)
- **CNAME `www`**: `sriharshakommalapati.github.io` (TTL: 3600)
- **A `@` (Apex)**:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **TXT `@`**: `google-site-verification: google951e0f26aec7e911.html`
- **Automation Script**: `bash scripts/sync-godaddy-dns.sh`

---

## 💰 Google AdSense Integration

- **Publisher ID**: `ca-pub-9463525929730000`
- **Account Verification**: `<meta name="google-adsense-account" content="ca-pub-9463525929730000" />`
- **AdSense Tag**: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9463525929730000" crossorigin="anonymous"></script>`
- **Authorized Digital Sellers**: `ads.txt` served from `/ads.txt` containing:
  ```text
  google.com, pub-9463525929730000, DIRECT, f08c47fec0942fa0
  ```
- **Ad Placements**:
  - Top Responsive Header Leaderboard (`728x90` / auto fluid)
  - Sidebar Medium Rectangle (`300x250`)
  - In-Feed Native Fluid Units between subject digests
  - In-Article Topic Study Digest Ads
  - Sticky Bottom Anchor Unit with minimize/expand controls
  - Guaranteed visual fallback preview cards when in dev sandbox or ad-blocked

---

## 🚀 Daily GitHub Actions Deployment

The workflow `.github/workflows/daily-deploy-pscsethu.yml` runs daily at 00:30 UTC:
1. Runs code quality and lint checks (`npm run lint`).
2. Builds production bundle (`npm run build`).
3. Injects canonical `dist/CNAME` (`www.pscsethu.com`) and `dist/ads.txt`.
4. Re-syncs GoDaddy DNS via REST API.
5. Deploys production bundle to GitHub Pages (`gh-pages`).

---

## 📋 One-Time GitHub Activation

To complete initial push to GitHub:
1. Open [https://github.com/new](https://github.com/new).
2. Set Repository Name to: `pscsethu` (Public).
3. Click **Create repository**.
4. In your terminal or deployment script, run:
   ```bash
   bash scripts/daily-sync-and-push.sh
   ```
5. In GitHub repository **Settings > Pages**, verify that the Custom Domain is set to `www.pscsethu.com` and **Enforce HTTPS** is checked.
