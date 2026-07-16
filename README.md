# NJ Transit Tracker

A portfolio project showcasing UI/UX skills with a Lit web components app for tracking NJ transit buses and trains. Features real-time route status, service alerts, and a clean, responsive design.

## Features

- 🚌 **Route Tracking**: Browse active bus and train routes with real-time status
- ⚠️ **Service Alerts**: View and filter critical, warning, and info alerts
- 🎯 **Responsive Design**: Mobile-friendly UI built with modern CSS Grid and Flexbox
- ⚡ **Lit Web Components**: Reusable, performant components built with Lit
- 🎨 **Clean UI/UX**: Professional design showcasing portfolio-grade UI skills

## Project Structure

```
nj-transit-tracker/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── header/          # App header component
│   │   ├── navigation/      # Navigation/tab component
│   │   └── cards/           # Reusable card components
│   ├── pages/               # Page-level components
│   │   ├── routes-page.ts
│   │   └── alerts-page.ts
│   ├── models/              # TypeScript interfaces/types
│   │   └── transit.ts
│   ├── data/                # Mock data
│   │   └── mock-data.ts
│   ├── main.ts              # Entry point
│   ├── app.ts               # Root component
│   └── style.css            # Global styles
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Components

### Header (`app-header`)

Displays the app title and branding with logo and tagline.

### Navigation (`app-nav`)

Tab-based navigation for switching between Routes and Alerts pages.

### Route Card (`route-card`)

Displays individual transit route information including:

- Route name and type (bus/train)
- Current status (on-time, delayed, cancelled)
- Next departure time
- Number of stops
- Destination

### Alert Card (`alert-card`)

Displays service alerts with:

- Alert message and severity level
- Time elapsed since alert was posted
- Resolution status

## Pages

### Routes Page (`routes-page`)

Browse all transit routes with filtering by type (bus/train). Cards are displayed in a responsive grid.

### Alerts Page (`alerts-page`)

View service alerts with toggle to show all alerts or only active ones.

## Mock Data

The app uses dummy data stored in `src/data/mock-data.ts`. This includes:

- 5 sample routes (bus and train)
- 3 sample alerts with different severity levels
- 3 sample vehicle locations

To add more routes or alerts, edit the mock data file.

## Technologies

- **Lit** - Lightweight web components framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Modern styling with CSS variables and Grid/Flexbox

## Browser Support

Modern browsers with Web Components support (Chrome, Firefox, Safari, Edge)

## Future Enhancements

- [ ] Real API integration with NJ Transit data
- [ ] Live vehicle tracking map
- [ ] User preferences/favorites
- [ ] Push notifications for alerts
- [ ] Route planning and directions
- [ ] Schedule details and timetables

## License

MIT
