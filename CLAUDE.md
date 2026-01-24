# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript compile + Vite production build
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite** for bundling and dev server
- **React Router DOM** for client-side routing
- **Lottie React** for animations
- **React Markdown** with remark-gfm for blog content

## Architecture

### Routing & Layout
`App.tsx` contains the `Layout` component (header/footer wrapper) and route definitions. Routes use React Router's nested layout pattern with `<Outlet />`.

**Routes:**
- `/` → Home (single-page with sections)
- `/blog` → Blog listing
- `/blog/:slug` → Individual blog post
- `/faq` → FAQ page

### Component Organization
- **`src/pages/`** - Route-level page components
- **`src/sections/`** - Reusable section components (HeroSection, ServicesSection, AboutSection, ContactSection, CaseStudiesSection, RequestsSection, FaqSection)
- **`src/styles/`** - Modular CSS files organized by feature (not component-scoped modules)
- **`src/utils/`** - Utilities (blog post parsing)

### Blog System
Blog posts are markdown files in `src/content/blog/` with YAML frontmatter:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Short description"
author: "Author Name"
authorLinkedIn: "https://linkedin.com/in/..."
---

Content here...
```

Posts are loaded via Vite's `import.meta.glob()` with eager loading. Custom frontmatter parser in `src/utils/blog.ts` - no external YAML library at runtime.

### Styling Approach
- CSS custom properties defined in `src/index.css` for design tokens
- Key colors: `--ink-900: #0b132b` (dark), `--accent: #5bc0be` (teal)
- Fonts: Cormorant Garamond (headings), Work Sans (body)
- Responsive design uses CSS `clamp()` and media queries in `src/styles/responsive.css`

## Deployment

GitHub Actions workflow deploys to GitHub Pages on push to `main`. Build output goes to `./dist/`.
