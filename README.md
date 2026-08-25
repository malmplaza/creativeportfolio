<div align="center">
  <h1>✨ Creative Portfolio</h1>
  <p><strong>Maria Luisa Plaza</strong> | Creative Designer • Content Creator • Social Media Specialist</p>
  <p>
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#structure">Project Structure</a>
  </p>
</div>

---

## About

A modern, interactive creative portfolio showcasing design work, social media content, and video projects. Built with React, TypeScript, and Vite for blazing-fast performance.

**Live Demo:** [View Portfolio](#) (add your deployed URL here)

## ✨ Features

- 🎨 **Gallery Hub** - Browse work organized by niche (Community Posts, Product Marketing, Advertising & Branding)
- 🎥 **Video Showcase** - Watch video content categorized by type (Advertising, Brand, Trends, Top Performing)
- 💼 **Professional Info** - Direct email and phone with one-click copy
- 🔗 **Social Links** - Connect via LinkedIn, TikTok, and Instagram
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **High Performance** - Built with Vite and optimized for fast loading
- 🎯 **Smooth Interactions** - Animations and transitions using Framer Motion

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/creative-portfolio.git
cd creative-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check TypeScript for errors |
| `npm run clean` | Remove build artifacts |
| `npm run deploy` | Build for deployment |

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── AboutSection.tsx     # Personal introduction with photos
│   ├── GalleryHub.tsx       # Gallery hub with niche cards
│   ├── Gallery.tsx          # Individual gallery view with lightbox
│   ├── VideoShowcase.tsx    # Video content organized by category
│   ├── ContactSection.tsx   # LinkedIn and social media links
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── Footer.tsx           # Footer
│   └── ... (other components)
├── data/
│   └── portfolioData.ts     # Profile information
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

### Adding Content

**Images:** Place in `Images/Social Media Posts/`
**Videos:** Place in `Images/videos/`

### Updating Profile Information

Edit [src/data/portfolioData.ts](src/data/portfolioData.ts):

```typescript
export const LUISA_PROFILE = {
  name: 'Maria Luisa Plaza',
  email: 'your@email.com',
  phone: '+1 (555) 123-4567',
  // ... other info
};
```

### Adding Videos

Videos are configured in [src/components/VideoShowcase.tsx](src/components/VideoShowcase.tsx).

File naming convention:
- Brand videos: `BRAND.MP4`, `BRAND2.MP4`, `BRAND3.MP4`
- Trend videos: `FUN1.MP4`, `FUN2.MP4`, `FUN3.MP4`, `FUN4.MP4`
- Top performing: `TOP1.MP4`, `TOP2.MP4`, `TOP3.MP4`
- Advertising: `ADV1.MOV`, `ADV2.mov`, `ADV3.MOV`

## 🚢 Deployment

### GitHub Pages (Recommended)

1. Push your code to GitHub (main branch)
2. Go to repository **Settings → Pages**
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch
5. The GitHub Actions workflow will automatically build and deploy!

### Vercel (Fastest Deployment)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Custom Server

1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure web server for SPA routing

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.**

## 🛠 Technology Stack

- **Frontend:** React 19, TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** canvas-confetti for celebrations

## 📝 License

MIT License - Feel free to use this as a template for your own portfolio!

## 🤝 Support

Have questions? Issues? 

- Check existing [GitHub Issues](https://github.com/yourusername/creative-portfolio/issues)
- Create a new issue with details
- Or contact Maria Luisa directly via email

---

<div align="center">
  <p>Built with ❤️ for creative professionals</p>
  <p><a href="#top">Back to top ⬆️</a></p>
</div>
