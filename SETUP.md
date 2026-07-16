# Setup Guide

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**

Verify your installation:

```bash
node --version
npm --version
```

## Installation Steps

### 1. Install Dependencies

From the project root directory, run:

```bash
npm install
```

This will install all dependencies listed in `package.json`:

- **Lit** - Web components framework
- **TypeScript** - Type checking
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

### 2. Start Development Server

```bash
npm run dev
```

This command:

- Starts a local dev server at `http://localhost:5173`
- Enables hot module replacement (HMR) for instant updates
- Automatically opens the app in your default browser

### 3. View the App

The app should open automatically. If it doesn't, navigate to:

```
http://localhost:5173
```

## Available Commands

### Development

```bash
npm run dev          # Start dev server with HMR
npm run type-check   # Check TypeScript types
npm run lint         # Run ESLint to check code quality
```

### Production

```bash
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview the production build locally
```

## Project Structure Overview

```
src/
├── app.ts                    # Root component
├── main.ts                   # Application entry point
├── style.css                 # Global styles
│
├── components/               # Reusable components
│   ├── header/              # App header
│   ├── cards/               # Route and Alert cards
│   ├── badges/              # Status badge component
│   ├── indicators/          # Occupancy indicator
│   └── loaders/             # Loading spinner
│
├── pages/                   # Page-level components
│   ├── routes-page.ts       # Routes listing page
│   └── routes-page.ts       # Routes listing page
│
├── models/                  # TypeScript interfaces
│   └── transit.ts
│
├── data/                    # Mock data
│   └── mock-data.ts
│
├── styles/                  # Style utilities
│   └── constants.ts
│
└── utils/                   # Helper functions
    └── helpers.ts
```

## Key Components

### AppRoot (`app.ts`)

Main application wrapper that handles page routing.

### AppHeader (`app-header.ts`)

Displays the application title and branding.

### RouteCard (`route-card.ts`)

Displays individual transit route information.

### RouteCard (`route-card.ts`)

Displays route information including status, destination, and departure details.

### Additional Components

- `StatusBadge` - Reusable status badge
- `OccupancyIndicator` - Visual occupancy meter
- `LoadingSpinner` - Loading indicator

## Customization

### Adding Routes

Edit `src/data/mock-data.ts` and add to the `mockRoutes` array:

```typescript
{
  id: 'route-id',
  name: 'Route Name',
  type: 'bus' | 'train',
  status: 'on-time' | 'delayed' | 'cancelled',
  nextDeparture: new Date(),
  destination: 'Destination',
  stops: 5,
}
```

### Adding Alerts

Edit `src/data/mock-data.ts` and add to the `mockAlerts` array:

```typescript
{
  id: 'alert-id',
  routeId: 'route-id',
  message: 'Alert message',
  severity: 'info' | 'warning' | 'critical',
  timestamp: new Date(),
  resolved: false,
}
```

### Styling

Global styles are in `src/style.css`. Component-specific styles are defined within each component using Lit's `css` tagged template.

CSS variables are defined in the root component (`app.ts`):

- `--primary-color`
- `--secondary-color`
- `--background-color`
- `--border-color`
- `--text-color`
- `--spacing-unit`

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. Check terminal output for the actual URL.

### TypeScript Errors

Run type checking to find issues:

```bash
npm run type-check
```

### Styling Issues

Clear browser cache (Ctrl+Shift+Delete) and restart dev server.

### Build Issues

Clear build cache:

```bash
rm -rf dist/
npm run build
```

## Browser DevTools

### Chrome/Edge DevTools

1. Press `F12` or `Ctrl+Shift+I`
2. Go to **Elements** tab to inspect components
3. Check **Console** for any errors

### Vue DevTools

Install the Web Components DevTools extension for better debugging.

## Next Steps

- Customize mock data in `src/data/mock-data.ts`
- Modify styles and colors in `src/style.css` and component files
- Create new reusable components in `src/components/`
- Extend the mock data with more routes and alerts
- When ready, integrate with a real API

## Resources

- [Lit Documentation](https://lit.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
