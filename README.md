# Black Pearl - Printing, IT & AI Studio

A modern Next.js website for Black Pearl, offering printing services, IT automation, digital marketing, and AI creative studio services in Doha Mall, Qatar.

## 🚀 Features

- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and structured data
- **Responsive Design**: Mobile-first, distressed paper texture theme
- **Performance**: Optimized images, code splitting, and caching
- **Accessibility**: WCAG compliant with semantic HTML
- **Modern Stack**: Next.js 16, React 19, Tailwind CSS 3

## 📦 Tech Stack

- **Framework**: Next.js 16.0.10
- **UI Library**: React 19.2.1
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
blackpearl/
├── app/
│   ├── about/           # About Us page
│   ├── components/      # Shared components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── AnimatedBackground.js
│   │   └── PaperTexture.js
│   ├── contact/         # Contact page
│   ├── insights/        # Blog/Insights page
│   ├── printing/        # Online printing booking
│   ├── products/        # Products showcase
│   ├── services/        # Services page
│   ├── technology/      # Technology stack page
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout with SEO
│   └── page.js          # Homepage
├── public/
│   ├── robots.txt       # Search engine crawler rules
│   └── sitemap.xml      # Site structure for SEO
├── vercel.json          # Vercel deployment config
└── next.config.mjs      # Next.js configuration
```

## 🌐 Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js and configure settings
5. Click "Deploy"

### Environment Setup

No environment variables required for basic deployment. The site will work out of the box.

## 🔍 SEO Optimization

The site includes:

- ✅ **Meta Tags**: Title, description, keywords for all pages
- ✅ **Open Graph**: Social media sharing optimization
- ✅ **Twitter Cards**: Enhanced Twitter previews
- ✅ **Structured Data**: Schema.org markup (ready to add)
- ✅ **Sitemap**: XML sitemap at `/sitemap.xml`
- ✅ **Robots.txt**: Search engine crawler instructions
- ✅ **Mobile Friendly**: Responsive design
- ✅ **Fast Loading**: Optimized performance
- ✅ **Semantic HTML**: Proper heading hierarchy

### Update Domain

After deployment, update the domain in:
- `app/layout.js` - Change `metadataBase` URL
- `public/sitemap.xml` - Update all URLs
- `public/robots.txt` - Update sitemap URL

## 📊 Performance Optimizations

- Image optimization with next/image
- Code splitting and lazy loading
- CSS optimization
- Compression enabled
- Minification for production
- Security headers configured

## 🎨 Design System

- **Color Scheme**: Black & white with distressed paper texture
- **Typography**: Geist Sans (primary), Geist Mono (monospace)
- **Animations**: Subtle fade-ins, hover effects
- **Layout**: Responsive grid, mobile-first

## 🔐 Security

Security headers configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: enabled
- Referrer-Policy: origin-when-cross-origin

## 📝 Pages

1. **Home** (`/`) - Hero, services overview, CTAs
2. **About** (`/about`) - Company story and values
3. **Services** (`/services`) - Detailed service offerings
4. **Printing** (`/printing`) - Online print ordering system
5. **Products** (`/products`) - Product portfolio
6. **Technology** (`/technology`) - Tech stack showcase
7. **Insights** (`/insights`) - Blog and news
8. **Contact** (`/contact`) - Contact form and info

## 🚨 Before Going Live

- [ ] Update domain in `app/layout.js`
- [ ] Update URLs in `public/sitemap.xml`
- [ ] Add Google Search Console verification code in `app/layout.js`
- [ ] Create and add OG image at `/public/og-image.jpg` (1200x630px)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test all forms
- [ ] Check all links
- [ ] Set up analytics (Google Analytics, etc.)

## 📧 Contact

For questions about the website:
- Email: hello@blackpearl.com
- Location: Doha Mall, Doha, Qatar

## 📄 License

Private project. All rights reserved.

---

Built with ❤️ using Next.js and deployed on Vercel.
