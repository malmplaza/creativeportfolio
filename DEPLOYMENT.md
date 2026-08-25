# Deployment Guide - Creative Portfolio

This guide covers deploying your portfolio to various platforms.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git (for version control)

## Build for Production

```bash
npm install
npm run build
```

This creates a `dist/` folder with optimized production-ready files.

## Deploy to GitHub Pages

### Option 1: Automatic with GitHub Actions

1. **Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']
  pull_request:
    branches: ['main']

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Update `vite.config.ts`** to add base path (if deploying to a subdirectory):

```typescript
export default defineConfig({
  base: '/creative-portfolio/',  // Replace with your repo name
  // ... rest of config
});
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Option 2: Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts and your site will be live!

### Option 3: Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Deploy to Custom Server (Nginx/Apache)

1. Build your project:
```bash
npm run build
```

2. Upload `dist/` folder to your server

3. Configure your web server to serve `dist/index.html` for all routes (SPA configuration)

### Nginx Configuration Example:

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  root /var/www/html/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

### Apache Configuration Example:

Create `.htaccess` in `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Environment Variables

If you need to add environment variables:

1. Create `.env.production` for production values
2. Reference in code: `import.meta.env.VITE_YOUR_VAR`
3. Variables must start with `VITE_` prefix

## Troubleshooting

### Build Fails
```bash
npm run clean  # Clear cache
npm install    # Reinstall dependencies
npm run build  # Try building again
```

### Assets Not Loading
- Ensure `base` path is correctly set in `vite.config.ts`
- Check all image/video paths use correct relative paths

### SPA Routing Issues
- Ensure your server redirects all routes to `index.html`
- This applies to GitHub Pages, Netlify, and Vercel (usually auto-configured)

## Performance Optimization

Current optimizations already included:
- ✅ React with code splitting
- ✅ Vite for fast builds
- ✅ Tailwind CSS for minimal CSS
- ✅ Image optimization via browser caching

## Support

For issues:
1. Check `npm run lint` for TypeScript errors
2. Review browser console for runtime errors
3. Check deployment platform logs

---

**Ready to deploy!** Choose your preferred platform above and follow the steps.
