# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Build & Development Commands

```bash
npm install --legacy-peer-deps  # Required due to peer dependency conflicts
npm run dev                      # Start Vite dev server
npm run build                    # Production build to dist/
npm run preview                  # Preview production build
npm run check-types              # TypeScript type checking
```

## Architecture Overview

This is a React 19 + TypeScript + Vite portfolio site using Three.js for 3D graphics and Framer Motion for animations.

### Key Directories

- `src/components/` - React components for each portfolio section (Hero, About, Experience, Tech, Works, Feedbacks, Contact)
- `src/components/canvas/` - Three.js 3D components using @react-three/fiber and @react-three/drei
- `src/constants/index.ts` - All portfolio content data (experiences, projects, testimonials, social links) - **edit this file to update content**
- `src/hoc/section-wrapper.tsx` - HOC that wraps sections with consistent Framer Motion animations
- `src/utils/motion.ts` - Reusable Framer Motion animation variants (textVariant, fadeIn, zoomIn, slideIn, staggerContainer)
- `src/styles.ts` - Predefined Tailwind utility class combinations
- `public/desktop_pc/` and `public/planet/` - GLTF 3D models loaded by canvas components

### 3D Canvas Components

The `src/components/canvas/` directory contains four Three.js scenes:
- `computers.tsx` - Rotating 3D desktop computer model in Hero section
- `stars.tsx` - Particle star field background
- `earth.tsx` - 3D Earth model in Contact section  
- `ball.tsx` - Technology icon spheres in Tech section

All canvas components use:
- `<Canvas>` from @react-three/fiber as the WebGL renderer
- `<Suspense>` with `CanvasLoader` fallback for async model loading
- `useGLTF` from @react-three/drei to load GLTF models

### Contact Form

The contact form (`src/components/contact.tsx`) redirects to WhatsApp with the form data encoded in the URL. The EmailJS configuration in `.env.example` is legacy and not currently used.
