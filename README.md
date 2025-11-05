# MyBackHub Shared Sidebar

A reusable, configurable sidebar component for the MyBackHub ecosystem. Built with Next.js 15, React 19, Radix UI, and Tailwind CSS v4.

## Features

- Fully responsive with mobile drawer support
- Keyboard shortcuts (Cmd/Ctrl + B to toggle)
- Collapsible sidebar with smooth animations
- Type-safe with full TypeScript support
- Highly customizable through props
- Built on accessible Radix UI primitives
- Compatible with NextAuth.js
- Consistent styling with Tailwind CSS

## Installation

### As a Git Submodule

```bash
# In your project root
git submodule add <repository-url> src/shared/sidebar
git submodule update --init --recursive
```

### Dependencies

Ensure your project has these peer dependencies installed:

```bash
npm install react@^19.0.0 react-dom@^19.0.0 next@^15.0.0
# or
yarn add react@^19.0.0 react-dom@^19.0.0 next@^15.0.0
```

## Setup

### 1. Add CSS Theme Variables

Copy the CSS variables from `styles/sidebar-theme.css` to your `app/globals.css`.

### 2. Configure TypeScript (if needed)

Add path alias to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/shared/sidebar/*": ["./src/shared/sidebar/src/*"]
    }
  }
}
```

## Quick Start

See `examples/` directory for complete working examples:
- `basic-usage.tsx` - Simple sidebar setup
- `with-next-auth.tsx` - NextAuth.js integration
- `custom-components.tsx` - Custom UserInfo and LogoutButton

## API Reference

See full documentation in SHARED_SIDEBAR_PLAN.md

## License

MIT
