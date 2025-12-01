# Luxe Interiors - Interior Design Website

A sleek, modern interior design website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, elegant interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Gallery**: Portfolio page with filterable image gallery and lightbox functionality
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Multi-page Site**: Three main pages (Home, Portfolio, Contact)

## Pages

1. **Home** - Hero section, approach overview, and call-to-action
2. **Portfolio** - Interactive image gallery with category filtering and lightbox
3. **Contact** - Contact information and inquiry form

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Images**: Unsplash (placeholder images)

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── contact/       # Contact page
│   ├── portfolio/     # Portfolio page with gallery
│   ├── layout.tsx     # Root layout with navbar and footer
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/
│   ├── Navbar.tsx     # Navigation component
│   ├── Footer.tsx     # Footer component
│   └── ImageGallery.tsx # Gallery with lightbox
└── public/
    └── images/        # Static images
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Content**: Update page content in respective files under `app/`
- **Images**: Replace Unsplash URLs with your own images
- **Contact Form**: Add form submission logic in `app/contact/page.tsx`

## License

This project is available for personal and commercial use.