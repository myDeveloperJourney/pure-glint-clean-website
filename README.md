# Pure Glint Clean - Professional Home Cleaning Website

A modern, mobile-first website for Pure Glint Clean, a residential cleaning service in North Fort Worth and the DFW area.

## 🌟 Features

### 🏠 Complete Business Website
- **Hero Section** with compelling call-to-action and trust indicators
- **About Section** highlighting local business values and customer-centric approach
- **Services Overview** featuring all 6 service types with detailed descriptions
- **Transparent Pricing** with three main tiers (Standard, Deep, Move-out)
- **Process Explanation** showing how booking and service delivery works
- **Customer Testimonials** with ratings and authentic reviews
- **Contact Form** with service customization options
- **Comprehensive Footer** with service areas and quick contact options

### 📱 Mobile-First Design
- Fully responsive design optimized for all devices
- Touch-friendly navigation and buttons
- Optimized images and fast loading times
- Smooth scrolling and modern animations

### 🎨 Modern Tech Stack
- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling and consistent design
- **Heroicons** for beautiful, consistent iconography
- **Inter Font** for clean, professional typography

### 🚀 Performance Optimized
- Built for Vercel deployment with optimal performance
- Image optimization with Next.js Image component
- SEO-optimized with proper meta tags and structure
- Fast loading with static generation where possible

## 🏆 Competitive Research Integration

Based on analysis of top-performing cleaning service websites, this site includes:

- **Trust Signals**: Insurance, bonding, background checks, guarantees
- **Clear Pricing**: Transparent pricing without hidden fees
- **Easy Contact**: Multiple contact methods prominently displayed
- **Social Proof**: Customer testimonials and rating displays
- **Local Focus**: Emphasis on serving North Fort Worth and DFW area
- **Service Customization**: Flexible options for different needs
- **Professional Imagery**: High-quality placeholder images ready for replacement

## 🎯 Services Featured

1. **Standard Recurring Services** - Weekly, bi-weekly, monthly maintenance
2. **Deep Cleaning Services** - Comprehensive detailed cleaning
3. **Move In/Out Cleaning** - Transition cleaning services
4. **Short Term Rentals** - Airbnb/VRBO cleaning
5. **Post Construction** - After renovation cleanup
6. **Vacation Home Cleaning** - Property maintenance services

## 💰 Pricing Structure

- **Standard Cleaning**: Starting at $130 (2-3 hours)
- **Deep Home Cleaning**: Starting at $205 (3-4 hours) - *Most Popular*
- **Move Out Cleaning**: Starting at $280 (4-5 hours)

## 📞 Contact Information

- **Phone**: (817) 405-7858
- **Email**: contact@pureglintclean.com
- **Service Areas**: North Fort Worth, Keller, Southlake, Grapevine, Colleyville, Watauga, Haltom City
- **Expanding to**: Newmarket (Early 2025)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- AWS
- Google Cloud Platform
- DigitalOcean

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation and mobile menu
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── About.tsx            # Company information
│   ├── Services.tsx         # Service offerings
│   ├── Pricing.tsx          # Pricing tiers
│   ├── Process.tsx          # How it works
│   ├── Testimonials.tsx     # Customer reviews
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links
```

## 🎨 Design System

### Colors
- **Primary Blue**: #2563eb (blue-600)
- **Secondary**: #60a5fa (blue-400)
- **Success**: #10b981 (green-500)
- **Warning**: #f59e0b (yellow-500)
- **Gray Scale**: Tailwind gray palette

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes for impact
- **Body**: Regular weight, optimized for readability

### Components
- Consistent button styles with hover states
- Card components with subtle shadows
- Form elements with focus states
- Responsive grid layouts

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```bash
# Add environment variables here if needed
NEXT_PUBLIC_SITE_URL=https://pureglintclean.com
```

### Image Optimization
External images are configured in `next.config.ts` for Unsplash placeholder images.

## 📝 Content Management

### Updating Content
- Service descriptions: Edit in `src/components/Services.tsx`
- Pricing: Update in `src/components/Pricing.tsx`
- Contact info: Modify in `src/components/Contact.tsx` and `src/components/Footer.tsx`
- Testimonials: Add/edit in `src/components/Testimonials.tsx`

### Adding Images
Replace placeholder Unsplash images with actual business photos:
1. Add images to `public/images/` directory
2. Update image sources in components
3. Ensure proper alt text for accessibility

## 🎯 SEO Optimization

- Proper meta tags in `layout.tsx`
- Semantic HTML structure
- Alt text for all images
- Clean URL structure
- Fast loading times
- Mobile-friendly design

## 📧 Form Handling

The contact form is set up with proper validation. To make it functional:
1. Set up a backend API or form service (FormSpree, Netlify Forms, etc.)
2. Update the form submission handler in `Contact.tsx`
3. Add proper error handling and success messages

## 🔍 Analytics & Tracking

Ready for integration with:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Other tracking solutions

## 📞 Support

For questions about this website implementation, contact the development team.

---

**Built with ❤️ for Pure Glint Clean**
