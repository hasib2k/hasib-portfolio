# Hasib Ahmed - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases my professional work as a Software Quality Assurance Engineer and Frontend Developer.

## Features

- **Modern Design**: Clean, professional layout with smooth animations and micro-interactions
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **Performance**: Built with Next.js 15 App Router and optimized for speed
- **Accessibility**: WCAG compliant with semantic HTML structure
- **TypeScript**: Type-safe development with full TypeScript support
- **Animations**: Smooth transitions using Framer Motion
- **Dynamic Navigation**: Smart navigation with active states and mobile menu
- **Project Showcase**: Filterable project portfolio with detailed views
- **Blog System**: Technical blog with navigation between posts
- **Contact Forms**: Multiple contact options and hire me page

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Development**: ESLint, Turbopack

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hasib2k/hasib-portfolio.git
   cd hasib-portfolio
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

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with detailed profile
│   ├── blog/              # Technical blog posts
│   │   ├── [slug]/        # Individual blog post pages
│   │   └── page.tsx       # Blog listing page
│   ├── contact/           # Contact page and forms
│   ├── hireme/            # Hire me page with availability
│   ├── projects/          # Project showcase
│   │   ├── [project]/     # Individual project detail pages
│   │   └── page.tsx       # Filterable projects listing
│   ├── skills/            # Skills and technologies page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page with hero section
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── loading.tsx        # Global loading component
│   └── not-found.tsx      # 404 error page
├── components/            # Reusable React components
│   ├── About.tsx          # About section component
│   ├── AITools.tsx        # AI tools showcase
│   ├── BlogNavigation.tsx # Blog post navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section with animations
│   ├── Navigation.tsx     # Main navigation component
│   ├── ProjectBackButton.tsx # Project detail navigation
│   ├── Projects.tsx       # Projects showcase component
│   ├── QuickChatButton.tsx # Quick contact button
│   ├── ScrollDown.tsx     # Scroll indicator
│   └── ui/               # UI components
│       └── Button.tsx    # Reusable button component
├── lib/
│   └── utils.ts          # Utility functions
public/
├── assets/               # Static assets
│   ├── ai-icons/        # AI tool icons
│   ├── profile/         # Profile images
│   ├── resume/          # CV/Resume files
│   └── [various images] # Project and blog images
└── [favicon and icons]  # Site icons and metadata
```

## Key Features & Pages

### 🏠 **Home Page** (`/`)
- Hero section with animated introduction
- Quick overview of skills and expertise
- Call-to-action buttons for contact and projects
- Responsive design with smooth scrolling

### 👨‍💻 **About Page** (`/about`)
- Detailed professional profile with statistics
- Technical skills and expertise areas
- Professional timeline and experience
- Personal interests and background
- Profile image and contact information

### 🛠️ **Skills Page** (`/skills`)
- Comprehensive list of technical skills
- Focus on SQA and Frontend Development
- Categorized skill sets with descriptions
- Technology proficiency levels

### 📂 **Projects Page** (`/projects`)
- Filterable project portfolio (All, Testing, Development)
- Project cards with images, descriptions, and tech stacks
- Individual project detail pages with comprehensive information
- Live demo and source code links
- Back navigation preserving filter state

### 📝 **Blog Page** (`/blog`)
- Technical blog posts and articles
- Topics covering testing, development, and best practices
- Individual blog post pages with full content
- Next/previous navigation between posts
- Responsive reading experience

### 📞 **Contact Page** (`/contact`)
- Contact form and information
- Social media links
- Professional contact details
- Location and availability information

### 💼 **Hire Me Page** (`/hireme`)
- Professional services and availability
- Detailed expertise areas
- Contact form for project inquiries
- Resume/CV download option

## Technical Highlights

- **Modern React Patterns**: Functional components with hooks
- **TypeScript Integration**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js 15 with App Router and Turbopack
- **Accessibility**: Semantic HTML and WCAG compliance
- **Animation System**: Framer Motion for smooth micro-interactions
- **Component Architecture**: Reusable and maintainable components
- **State Management**: React hooks for local state management
- **SEO Friendly**: Proper meta tags and structured data

## Customization Guide

### Content Updates
1. **Personal Information**: Update details in component files
2. **Profile Images**: Replace images in `public/assets/profile/`
3. **Resume**: Update CV file in `public/assets/resume/`
4. **Projects**: Add new projects in `src/app/projects/` directory
5. **Blog Posts**: Create new blog posts in `src/app/blog/` directory
6. **Contact Info**: Update contact details in contact components

### Styling Customization
1. **Colors**: Modify Tailwind color scheme in `tailwind.config.js`
2. **Typography**: Update font families and sizes
3. **Spacing**: Adjust layout spacing using Tailwind utilities
4. **Animations**: Customize Framer Motion animations in components
5. **Breakpoints**: Modify responsive breakpoints as needed

### Adding New Features
1. **New Pages**: Create new routes in `src/app/` directory
2. **Components**: Add reusable components in `src/components/`
3. **Blog Posts**: Follow existing blog post structure
4. **Projects**: Use existing project template for new additions

## Asset Requirements

### Required Images
- `public/assets/profile/homeprofile.svg` - Hero section profile image
- `public/assets/profile/profile.svg` - About section profile image
- `public/assets/resume/hasib_ahmed_cv.pdf` - Resume/CV file

### Optional Assets
- Project images in `public/assets/`
- Blog post images
- Additional icons and graphics
- Social media icons

## Responsive Design

The website is fully responsive with optimized layouts for:

- **Mobile**: 320px - 768px (Stack layout, mobile menu)
- **Tablet**: 768px - 1024px (Adjusted spacing, collapsible menu)
- **Desktop**: 1024px+ (Full layout, expanded navigation)

### Key Responsive Features
- Mobile-first CSS approach
- Responsive navigation with hamburger menu
- Optimized image sizes for different devices
- Touch-friendly interactive elements
- Readable typography at all screen sizes

## Deployment

### Vercel (Recommended)
1. **Connect Repository**
   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings (usually auto-detected)
   - Deploy automatically with each push

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Update contact form APIs if using external services

### Other Deployment Options

#### Netlify
```bash
npm run build
# Upload dist/out folder to Netlify
```

#### GitHub Pages
```bash
# Add to package.json scripts:
"export": "next build && next export"
npm run export
# Deploy the out/ folder to GitHub Pages
```

#### Traditional Hosting
```bash
npm run build
npm run start
# Upload build output to your hosting provider
```

### Production Checklist
- [ ] Update all personal information and links
- [ ] Replace placeholder images with actual photos
- [ ] Add real resume/CV file
- [ ] Test all contact forms and links
- [ ] Verify responsive design on multiple devices
- [ ] Check performance with Lighthouse
- [ ] Test accessibility features
- [ ] Update meta tags and SEO information

## Development Workflow

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create pull request
git push origin feature/new-feature
```

### Code Quality
- ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting (recommended)
- Pre-commit hooks (recommended)

## Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Use `@next/bundle-analyzer`
- **Core Web Vitals**: Optimized for Google's Core Web Vitals
- **Lazy Loading**: Components and images load on demand

## Browser Support

- **Chrome/Edge**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Mobile**: iOS Safari, Chrome Mobile

## Contributing

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/hasib-portfolio.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open Pull Request**
   - Describe your changes
   - Include screenshots if UI changes
   - Ensure all tests pass

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact & Support

### Professional Contact
- **Email**: hasibahmed.ig@gmail.com
- **Phone**: +880 170 6776 711
- **LinkedIn**: [Hasib Ahmed](https://www.linkedin.com/in/hasib2k)
- **GitHub**: [hasib2k](https://github.com/hasib2k)

### Project Support
- **Issues**: [GitHub Issues](https://github.com/hasib2k/hasib-portfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/hasib2k/hasib-portfolio/discussions)
- **Documentation**: This README and inline code comments

---

**Built with ❤️ by Hasib Ahmed** | Software Quality Assurance Engineer & Frontend Developer
