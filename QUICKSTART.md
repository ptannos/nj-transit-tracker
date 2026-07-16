# Quick Start Guide

Get the NJ Transit Tracker app running in minutes!

## 1️⃣ Install Dependencies (1 minute)

```bash
npm install
```

## 2️⃣ Start Development Server (30 seconds)

```bash
npm run dev
```

The app automatically opens at `http://localhost:5173`

## 3️⃣ Explore the App

You'll see:

- **Header**: NJ Transit Tracker branding
- **Routes View**: Browse buses and trains in a responsive card grid

## Project Highlights

### 📁 Clean Architecture

```
src/
├── components/     # Reusable UI components
├── pages/         # Full page components
├── models/        # TypeScript interfaces
├── data/          # Mock data (no API calls)
├── utils/         # Helper functions
└── styles/        # Theme constants
```

### 🎨 Key Features

- ✅ 6+ reusable components
- ✅ TypeScript for type safety
- ✅ Professional styling with CSS Grid/Flexbox
- ✅ Mock data (easily swap with real API)
- ✅ Responsive design (mobile-friendly)

### 📝 Add Your Own Data

Edit `src/data/mock-data.ts`:

```typescript
// Add a new route
{
  id: 'my-route',
  name: 'Route 123',
  type: 'bus',
  status: 'on-time',
  nextDeparture: new Date(),
  destination: 'Your Destination',
  stops: 10,
}

// Add a new alert
{
  id: 'my-alert',
  routeId: 'my-route',
  message: 'Your alert message',
  severity: 'warning',
  timestamp: new Date(),
  resolved: false,
}
```

## Available Commands

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
npm run type-check   # Check TypeScript types
```

## Component Examples

### Display a Route Card

```html
<route-card .route="${routeObject}"></route-card>
```

### Show Status

```html
<status-badge status="delayed"></status-badge>
```

### Show Occupancy

```html
<occupancy-indicator .percentage="${65}"></occupancy-indicator>
```

## Next Steps

1. **Customize Colors**: Edit CSS variables in `src/app.ts`
2. **Add Routes**: Update mock data in `src/data/mock-data.ts`
3. **Create Components**: Copy template from `COMPONENTS.md`
4. **Connect API**: Replace mock data with real API calls
5. **Deploy**: Run `npm run build` and host the `dist/` folder

## Need Help?

- 📖 Read [SETUP.md](SETUP.md) for detailed setup guide
- 📚 Check [COMPONENTS.md](COMPONENTS.md) for component documentation
- 📘 Visit [Lit Documentation](https://lit.dev/)

## Project Structure at a Glance

```
nj-transit-tracker/
├── src/
│   ├── app.ts                          # Root component
│   ├── main.ts                         # Entry point
│   ├── style.css                       # Global styles
│   │
│   ├── components/
│   │   ├── header/app-header.ts        # Header component
│   │   ├── cards/                      # Card components
│   │   │   └── route-card.ts
│   │   ├── badges/status-badge.ts      # Status badge
│   │   ├── indicators/occupancy-indicator.ts
│   │   └── loaders/loading-spinner.ts
│   │
│   ├── pages/
│   │   └── routes-page.ts
│   │
│   ├── models/transit.ts               # TypeScript types
│   ├── data/mock-data.ts               # Mock data
│   ├── styles/constants.ts             # Style constants
│   └── utils/helpers.ts                # Helper functions
│
├── index.html                          # HTML entry point
├── package.json                        # Dependencies
├── tsconfig.json                       # TypeScript config
├── vite.config.ts                      # Vite config
├── .eslintrc.json                      # Linting rules
├── .gitignore                          # Git ignore
├── README.md                           # Project info
├── SETUP.md                            # Setup guide
└── COMPONENTS.md                       # Component docs
```

## Tech Stack

- **Lit.dev** - Lightweight web components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **CSS3** - Modern styling (Grid, Flexbox, Variables)

---

**Ready to showcase your UI skills? Happy coding! 🚀**
