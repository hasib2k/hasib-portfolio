# Hasib Ahmed - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project replicates the design and functionality of [(dev-portfolio-main.vercel.app/).](https://dev-portfolio-main.vercel.app/).

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: WCAG compliant with semantic HTML
- **SEO Optimized**: Meta tags, structured data, and OpenGraph support
- **TypeScript**: Type-safe development with full TypeScript support
- **Animations**: Smooth transitions using Framer Motion

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dev_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/           # About page
│   ├── hireme/          # Hire Me page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── AITools.tsx      # AI Tools section
│   ├── Footer.tsx       # Footer component
│   └── Navigation.tsx   # Navigation component
└── lib/
    └── utils.ts         # Utility functions
```

## Key Sections

1. **Hero Section**: Introduction with animated profile image and call-to-action buttons
2. **About Section**: Personal information and professional background
3. **AI Tools Section**: Showcase of modern AI development tools
4. **Footer**: Contact information and social media links
5. **Navigation**: Responsive navigation with mobile menu

## Required Assets

To complete the setup, add these files to the `public/assets/` directory:

- `profile/homeprofile.png` - Hero section profile image (400x400px)
- `profile/profile.png` - About section profile image (500x600px)
- `resume/hasib.pdf` - Resume/CV file

## Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - Detailed about page with skills and education
- **Hire Me** (`/hireme`) - Contact information and availability

## Customization

1. **Content**: Update personal information in components
2. **Styling**: Modify Tailwind classes for different colors/spacing
3. **Assets**: Replace placeholder images with actual photos
4. **Links**: Update social media and contact links
5. **Resume**: Add your actual resume PDF

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
- **Netlify**: Drag and drop `npm run build` output
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional Hosting**: Upload `npm run build && npm run export` output

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Contact

- **Email**: hasibahmed.ig@gmail.com
- **Phone**: +880 170 6776 711
- **LinkedIn**: [Hasib Ahmed](https://www.linkedin.com/in/hasib2k)
- **GitHub**: [hasib-ahmed](https://github.com/hasib2k)
