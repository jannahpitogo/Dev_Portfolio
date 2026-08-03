# Dev Portfolio

A personal developer portfolio built with Vite, React 19, and TanStack React Router.

The app showcases a hero section, about content, technology stack icons, and a featured projects gallery driven from JSON data.

## Features

- Responsive portfolio landing page
- Client-side routing with `@tanstack/react-router`
- Hero section with introduction and live CTA buttons
- About section with personal summary and profile image
- Tech stack section using `tech-stack-icons` plus local image icons
- Work section rendering project cards from `src/data/projects.json`
- Local asset imports for images and icons

## Built With

- Vite
- React 19
- `@tanstack/react-router`
- `tech-stack-icons`
- ESLint

## Project Structure

- `src/main.jsx` — app entry, router provider, global CSS import
- `src/routes/__root.jsx` — root layout and navigation
- `src/routes/index.jsx` — homepage content, stack, work cards
- `src/data/projects.json` — project card data
- `src/assets/` — image assets used in the app
- `src/index.css` — global styling and layout rules

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- Project cards are populated from `src/data/projects.json`.
- Images in `src/assets/` are imported by React components instead of referenced by raw strings.
- The app uses modern React routing and a component-based section layout.

## Contact

If you want to connect with the developer, the site includes an email contact in the about section.
