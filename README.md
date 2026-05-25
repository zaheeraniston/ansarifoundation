# Ansari Foundation Assam - Official Website

**Tagline:** EDUCATION • ENDURANCE • EXPOSURE

## Setup & Deploy Instructions

### 1. Unzip the project
```bash
unzip ansari-final.zip
cd ansari-final
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open http://localhost:3000

### 4. Build for production
```bash
npm run build
npm start
```

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ShadCN UI
- Lucide Icons

## Project Structure
```
src/
├── app/              # Pages & layout
├── components/
│   ├── sections/     # Page sections (Hero, About, Donate, etc.)
│   ├── shared/       # Navbar, Footer, Floating Buttons
│   └── ui/           # ShadCN UI components
├── hooks/            # Custom hooks
└── lib/              # Constants, utilities
public/               # Logo, founder photo, favicon
prisma/               # Database schema
```

## Key Features
- Large centered logo with tagline in Hero section
- Founder details: Hafiz Adv. Elias Hossen Ansari
- Axis Bank donation details with copy-to-clipboard
- Contact info: Phone & Address
- Mobile responsive design
- Glassmorphism effects & animations
