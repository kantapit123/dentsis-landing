# Dentsis Landing Page

Modern, responsive landing page for Dentsis - a comprehensive dental clinic management system.

## Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Thai/English language toggle
- ✅ Modern Japanese-inspired minimalist design
- ✅ Custom color palette (primary blue, accent mint, soft backgrounds)
- ✅ 10 comprehensive sections (Hero, Features, Pricing, FAQ, Contact, etc.)
- ✅ Form validation with success states
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Production-ready

## Color Theme

```css
Primary (calm clinic blue): #2F6FED
Secondary (soft sky): #7BCBFF
Accent (mint hygiene): #35D0BA
Background: #F7FAFF
Surface (cards): #FFFFFF
Text (main): #0F172A
Text-muted: #64748B
Border: #E2E8F0
```

## Project Structure

```
dentsis-landing/
├── public/
│   └── _redirects              # Cloudflare Pages SPA routing
├── src/
│   ├── content/
│   │   └── translations.ts     # Thai/EN content
│   ├── sections/
│   │   ├── Header.tsx          # Navigation + language toggle
│   │   ├── Hero.tsx            # Main hero section
│   │   ├── Trust.tsx           # Trust/benefits section
│   │   ├── Modules.tsx         # Features: OPD/Appointment/Billing
│   │   ├── Workflow.tsx        # 4-step process timeline
│   │   ├── Testimonials.tsx    # Customer testimonials
│   │   ├── Pricing.tsx         # 3-tier pricing
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── Contact.tsx         # Contact form with validation
│   │   └── Footer.tsx          # Footer with links
│   ├── styles/
│   │   └── index.css           # Global styles + Tailwind
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── index.html                  # HTML with SEO meta tags
├── tailwind.config.js          # Custom theme configuration
├── vite.config.ts              # Vite configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dentsis-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Adding New Content

Edit `src/content/translations.ts` to update or add Thai/English content.

### Customizing Styles

- Global styles: `src/styles/index.css`
- Theme colors: `tailwind.config.js`
- Component-specific styles: Use Tailwind utility classes

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

Preview the production build locally:
```bash
npm run preview
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed Cloudflare Pages deployment instructions.

### Quick Deploy

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`

The `_redirects` file ensures SPA routing works correctly on Cloudflare Pages.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

© 2026 Dentsis. All rights reserved.
