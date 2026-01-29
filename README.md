# Samim Safi | Portfolio

Fast, clean, SEO-ready portfolio built with **React + Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- **Vite** – fast build & dev
- **TypeScript** – type-safe, scalable
- **Tailwind CSS** – utility-first styling
- **Framer Motion** – animations
- **React Router** – routing (hash: `#projects`, `#experience`, `#contact`)

## Project structure

```
src/
├── assets/          # images, icons, profile photos
├── components/
│   ├── ui/          # atomic components (buttons, cards)
│   ├── layout/      # layout components (navbar, footer)
│   └── animation/   # Framer Motion wrappers
├── sections/        # page sections (Hero, About, Skills, etc.)
├── data/            # application content & configuration
├── hooks/           # custom React hooks
├── pages/           # page components
├── styles/          # global styles & Tailwind config
├── utils/           # utility functions
└── main.tsx         # application entry point
```

## Theming

Custom theme defined in `tailwind.config.js`:

- **Colors**:
  - `primary`: `#6366f1` (Indigo)
  - `accent`: `#22d3ee` (Cyan)
  - `highlight`: `#a855f7` (Purple)
  - `bg`: `#0b0f1a` (Dark Navy)
- **Fonts**:
  - `display`/`heading`: `Plus Jakarta Sans`, `Space Grotesk`
  - `sans`: `Inter`

## Setup

1. **Install deps** (if you use `only-if-cached`, configure npm to allow network or use online):

   ```bash
   npm install
   ```

2. **Env** – copy from example and edit:

   ```bash
   cp .env.example .env
   ```

   Variables: `VITE_SITE_NAME`, `VITE_EMAIL`.

## Scripts

| Command     | Description              |
| ----------- | ------------------------ |
| `npm run dev`     | Dev server               |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
| `npm run format`  | Format with Prettier     |

## Data & content

- **Site Config**: `src/data/site.ts`
- **About**: `src/data/about.ts`
- **Skills**: `src/data/skills.ts`
- **Projects**: `src/data/projects.ts`
- **Experience**: `src/data/experience.ts`
- **Showcase**: `src/data/showcase.ts`
- **Social links**: `src/data/socials.ts`
- **Contact**: `src/data/contact.ts`

Keep all copy and list data here; components should import from `data/` and stay free of hardcoded text.

## SEO

- Title, description, and keywords are set in `index.html`.
- Update them when you change focus or keywords.

## Linting & formatting

- **ESLint** – `npm run lint`
- **Prettier** – `npm run format`

Adjust rules in `eslint.config.js` and `.prettierrc` as needed.
