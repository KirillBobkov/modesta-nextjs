# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Next.js website for "Модеста" (modesta.tech) — a Russian company manufacturing upper limb prostheses. The site uses static export and is deployed as pure HTML/CSS/JS.

## Development Commands

```bash
# Development server
npm run dev

# Build for production (includes parsing VK posts)
npm run build

# Start production server
npm start

# Parse VK posts to content/news.json without build
npm run parse
```

**Important**: The build command runs `node getPosts.js` first (via `&` operator), which fetches posts from VK API and writes to `content/news.json`. Ensure the VK token in `getPosts.js` is valid before building.

## Architecture

### Static Export Configuration
- Next.js configured with `output: 'export'` in `next.config.js`
- Build output goes to `out/` directory
- `images: { unoptimized: true }` — no automatic image optimization

### Page Structure
- Pages are in `pages/` directory (Pages Router, not App Router)
- Each page uses `Layout` component wrapper with meta configuration
- Meta configuration includes `title`, `description`, `keywords`, `seoContent` (hidden SEO text)
- All routes are static

### Theme System
- Dark/light theme toggling via CSS classes on `:root` and `:root.dark`
- CSS custom properties defined in `styles/colors.css`
- Theme preference stored in localStorage, respects `prefers-color-scheme`

### Content Management
- News posts fetched from VK group via `getPosts.js` script
- Static article content in `content/articles/`
- Assets in `assets/` directory

### Key Components
- `Layout.js` — Main layout wrapper with SEO meta tags, fonts, Navigation, Footer, feedback form
- `Navigation/Navigation.jsx` — Site navigation with burger menu
- `NewForm/NewForm.jsx` — Feedback/popup form for lead generation
- `ChatWidget.tsx` — Chat widget (currently commented out in Layout.js)

### Analytics & Metrics
- Yandex.Metrika integration via `MetricsCode.jsx` component
- `useYandexMetricsPageLoaded.jsx` hook for page view tracking

### Dependencies
- Next.js (latest) — React framework
- Material-UI (`@mui/material`, `@mui/icons-material`, `@mui/x-charts`) — UI components
- Formik + Zod — Form validation
- vk-io — VK API integration for fetching posts
- CSS Modules — Styling with BEM-like naming convention

### Styling Convention

**CSS Modules** are used with BEM-like naming:
```css
.component__element       /* Element */
.component__elementModifier /* Modifier (camelCase, not --modifier) */
```

**Critical Pattern for Conditional Classes:**
Due to JSX parsing limitations, ALWAYS pre-compute className variables:
```jsx
// ❌ BAD - Causes syntax errors
className={`${styles.class} ${condition ? styles.classModifier : ''}`}

// ✅ GOOD - Use pre-computed variables
const className = condition
  ? styles.class + " " + styles.classModifier
  : styles.class;
```

### Component Folder Structure
Each component has its own folder:
```
components/ComponentName/
  ComponentName.jsx (or .tsx)
  ComponentName.module.css
```

## Build Process Details

The `build` script runs `getPosts.js` in parallel with Next.js build:
1. Fetches up to 200 posts from VK group (ID: -131964440)
2. Processes posts (text, photos, videos, links, copy_history)
3. Writes to `content/news.json`
4. Next.js builds static HTML from pages

## File Naming Conventions

- Pages: `.js` extension (e.g., `index.js`, `about-us.js`)
- Components: `.jsx` or `.tsx` (e.g., `Footer.jsx`, `ChatWidget.tsx`)
- Hooks: `.jsx` extension in `hooks/` directory
- Styles: `.css` files in component directories
