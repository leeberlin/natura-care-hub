# 🚀 Deployment Guide - Auto-Update từ GitHub

## 📋 Quick Setup Options

### 🟢 OPTION 1: Vercel (Recommended)

#### Step 1: Import GitHub Repository
1. Đi tới [vercel.com](https://vercel.com)
2. Sign in với GitHub account
3. Click **"Add New Project"**
4. Import repository `natura-care-hub`
5. Configure:
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

#### Step 2: Auto-Deploy Setup
- ✅ Vercel tự động deploy khi push lên `main` branch
- ✅ Preview deployments cho pull requests
- ✅ Custom domain support

### 🟠 OPTION 2: Netlify

#### Step 1: Connect Repository
1. Đi tới [netlify.com](https://netlify.com)
2. **"New site from Git"** → Choose GitHub
3. Select `natura-care-hub` repository
4. Build settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`

#### Step 2: Configure Build
```bash
# netlify.toml (tự động tạo)
[build]
  command = "pnpm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 🔵 OPTION 3: GitHub Pages

#### Step 1: Enable GitHub Pages
1. Vào GitHub repository settings
2. Pages → Source: **GitHub Actions**

#### Step 2: GitHub Actions đã setup
- ✅ File `.github/workflows/deploy.yml` đã tạo
- ✅ Tự động build & deploy khi push

### 🟣 OPTION 4: Railway

#### Quick Deploy Button
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/vite-react)

1. Click button trên
2. Connect GitHub repository
3. ✅ Auto-deploy setup complete

---

## 🔧 Advanced Configuration

### Environment Variables
Nếu cần environment variables:

```bash
# .env.production
VITE_API_URL=https://your-api.com
VITE_APP_TITLE=Natura Pflegedienst
```

### Custom Domain Setup

#### Vercel:
```bash
# vercel.json already configured
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Netlify:
```bash
# _redirects file
/*    /index.html   200
```

---

## 📈 Monitoring & Analytics

### Add Analytics (Optional)
```typescript
// Add to main.tsx
import { inject } from '@vercel/analytics';
inject();
```

### Performance Monitoring
```bash
pnpm add @vercel/speed-insights
```

---

## ✅ Checklist After Setup

- [ ] Repository connected to deployment platform
- [ ] Auto-deploy working (test với commit)
- [ ] Custom domain configured (if needed)
- [ ] HTTPS enabled
- [ ] Environment variables set
- [ ] Build optimization enabled

---

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache và rebuild
pnpm store prune
rm -rf node_modules
pnpm install
pnpm run build
```

### Routing Issues
Ensure SPA routing is configured:
- Vercel: `vercel.json` ✅
- Netlify: `_redirects` file needed
- GitHub Pages: Custom 404.html

---

## 📞 Support

Nếu gặp vấn đề:
1. Check build logs trên deployment platform
2. Test build locally: `pnpm run build`
3. Check deployment platform documentation

**Happy Deploying! 🎉** 