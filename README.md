# 🌿 Natura Care Hub

> Modern healthcare management platform built with React, TypeScript, and Vite

[![Deploy Status](https://img.shields.io/badge/Deploy-Live-brightgreen)](https://naturapflegedienst.de)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF)](https://vitejs.dev/)

## 🚀 Live Demo
**Website**: [https://naturapflegedienst.de](https://naturapflegedienst.de)

## ✨ Features

- 🎨 **Modern UI/UX** - Built with shadcn/ui components
- 📱 **Responsive Design** - Works perfectly on all devices  
- ⚡ **High Performance** - Optimized with Vite build system
- 🔒 **Type Safety** - Full TypeScript implementation
- 🎯 **SEO Optimized** - Search engine friendly
- 🔧 **Easy Deployment** - Ready for production

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI Framework
- **TypeScript 5.5.3** - Type Safety
- **Vite 5.4.1** - Build Tool & Dev Server
- **Tailwind CSS 3.4.11** - Styling
- **shadcn/ui** - Component Library

### Key Libraries
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Tanstack Query** - Data fetching
- **Lucide React** - Icons
- **Recharts** - Data visualization

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup
```bash
# Clone repository
git clone https://github.com/leeberlin/natura-care-hub.git
cd natura-care-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

### Quick Deploy to Netcup
```bash
# Build and prepare for deployment
./build-and-deploy-macos.sh

# Upload deploy-ready/ folder to your hosting
# Or upload website-deploy.zip and extract
```

### Deploy to Other Platforms

#### Vercel (Recommended)
```bash
# Deploy with one command
vercel --prod
```

#### Netlify
```bash
# Build command: npm run build
# Publish directory: dist
```

#### GitHub Pages
- Enable GitHub Pages in repository settings
- GitHub Actions workflow will auto-deploy

## 📁 Project Structure

```
natura-care-hub/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   └── styles/            # Global styles
├── public/                # Static assets
├── dist/                  # Build output (generated)
├── .htaccess              # Apache configuration
├── deploy-ready/          # Deployment folder (generated)
└── website-deploy.zip     # Deployment package (generated)
```

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
VITE_API_URL=https://your-api.com
VITE_APP_TITLE=Natura Pflegedienst
```

### Apache Configuration
The included `.htaccess` file provides:
- React Router support
- Gzip compression
- Browser caching
- Security headers

## 📖 Development Guide

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Git Workflow
```bash
# Quick update to GitHub
./quick-push.sh

# Full deployment update
./push-to-github.sh

# Manual git workflow
git add .
git commit -m "Your commit message"
git push origin main
```

## 🌐 Deployment Platforms

### Supported Platforms
- ✅ **Netcup Webhosting** - Currently deployed
- ✅ **Vercel** - Recommended for auto-deploy
- ✅ **Netlify** - Easy static hosting
- ✅ **GitHub Pages** - Free hosting
- ✅ **Railway** - Full-stack hosting

## 🔒 SSL/Security

- ✅ **Let's Encrypt SSL** configured
- ✅ **HTTPS redirect** enabled
- ✅ **Security headers** implemented
- ✅ **HSTS** configured

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ 
- 🚀 **Core Web Vitals**: Optimized
- 📦 **Bundle Size**: Minimized with tree-shaking
- 🗜️ **Gzip Compression**: Enabled

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- 🌐 **Website**: [naturapflegedienst.de](https://naturapflegedienst.de)
- 📧 **Email**: phamtuan17892@gmail.com
- 💬 **Issues**: [GitHub Issues](https://github.com/leeberlin/natura-care-hub/issues)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Vite](https://vitejs.dev/) for the amazing build tool
- [Vercel](https://vercel.com/) for hosting platform
- [Netcup](https://www.netcup.de/) for reliable hosting

---

**⚡ Built with ❤️ using modern web technologies**