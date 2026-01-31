---
description: Repository Information Overview
alwaysApply: true
---

# Chrizeecry Collective Information

## Summary
A Next.js web application built with TypeScript and Tailwind CSS, serving as a platform for the **Chrizeecry Collective**. The project utilizes **shadcn/ui** (Radix UI) for its component architecture and focuses on a modern, responsive user experience. It appears to be a v0-generated project base ("my-v0-project").

## Structure
- **[./app/](./app/)**: Contains the Next.js App Router files, including the main page [./app/page.tsx](./app/page.tsx) and global layout [./app/layout.tsx](./app/layout.tsx).
- **[./components/](./components/)**: Reusable React components.
  - **[./components/ui/](./components/ui/)**: UI components powered by Radix UI and styled with Tailwind CSS (shadcn/ui).
- **[./hooks/](./hooks/)**: Custom React hooks such as `use-mobile` and `use-toast`.
- **[./lib/](./lib/)**: Shared utility functions, primarily `utils.ts`.
- **[./public/](./public/)**: Static assets including images, logos, and favicons.
- **[./styles/](./styles/)**: Global CSS definitions.
- **[./docs/](./docs/)**: Documentation and cheatsheets.

## Language & Runtime
**Language**: TypeScript  
**Version**: ^5 (as specified in `tsconfig.json`)  
**Build System**: Next.js 16.1.6  
**Package Manager**: npm  

## Dependencies
**Main Dependencies**:
- **next**: ^16.1.6
- **react**: 18.3.1
- **lucide-react**: ^0.454.0
- **zod**: ^3.24.1
- **radix-ui**: Extensive use of Radix UI primitives (Accordion, Dialog, etc.) via shadcn/ui.
- **recharts**: latest (for charting).
- **date-fns**: 3.6.0
- **react-hook-form**: latest

**Development Dependencies**:
- **typescript**: ^5
- **tailwindcss**: ^3.4.19
- **postcss**: ^8.5.6
- **autoprefixer**: ^10.4.23

## Build & Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint the project
npm run lint
```

## Main Files & Resources
- **[./app/page.tsx](./app/page.tsx)**: Main application entry point and landing page content.
- **[./next.config.mjs](./next.config.mjs)**: Next.js configuration (configured to ignore TS build errors and unoptimize images).
- **[./tailwind.config.ts](./tailwind.config.ts)**: Tailwind CSS styling configuration.
- **[./components.json](./components.json)**: Configuration for shadcn/ui components.
