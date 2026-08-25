# 🚀 Quick Start Guide

Get your Creative Portfolio deployed in 5 minutes!

## Step 1: Prepare Your Repository

```bash
# Install dependencies
npm install

# Verify everything builds
npm run build

# Check for errors
npm run lint
```

## Step 2: Push to GitHub

```bash
git add .
git commit -m "🚀 Ready for deployment"
git push origin main
```

## Step 3: Choose Your Platform

### 🟪 GitHub Pages (FREE)
1. Go to **Settings → Pages**
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch
4. Wait for deployment to complete
5. ✅ Site is live at `https://yourusername.github.io/creative-portfolio`

### ⚡ Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"
4. ✅ Site is live instantly

### 🔗 Netlify
1. Go to [netlify.com](https://netlify.com)
2. "New site from Git"
3. Connect GitHub repo
4. Set build command: `npm run build`
5. Set publish dir: `dist`
6. ✅ Site is live

## Step 4: Set Up Custom Domain (Optional)

Each platform has domain settings:
- **GitHub Pages:** Settings → Pages → Custom domain
- **Vercel:** Project Settings → Domains
- **Netlify:** Site Settings → Domain management

## Step 5: Monitor & Update

After deployment:

```bash
# Make changes locally
# Test with: npm run dev
# Build: npm run build

# Push updates
git add .
git commit -m "✨ Update portfolio"
git push origin main

# Deployment runs automatically! ✨
```

## Troubleshooting

### Site won't load
- [ ] Check GitHub Actions logs for build errors
- [ ] Ensure `dist/` folder is being published
- [ ] Clear browser cache
- [ ] Check deployment platform status

### Assets missing
- [ ] Verify image/video paths are correct
- [ ] Check that `Images/` folder is tracked in Git
- [ ] Ensure file names match exactly (case-sensitive on Linux)

### Build fails
```bash
# Clear and rebuild
npm run clean
npm install
npm run build
```

## Next Steps

- [ ] Add more gallery images to `Images/Social Media Posts/`
- [ ] Add more videos to `Images/videos/`
- [ ] Update profile info in `src/data/portfolioData.ts`
- [ ] Set up analytics
- [ ] Share your portfolio!

## Need Help?

- 📖 See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions
- 📋 Use [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) before going live
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) for development help

---

**You're all set! Your portfolio is now live! 🎉**

Share it with the world! 🌍
