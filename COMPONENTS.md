# Components Documentation

This document provides detailed information about all available components in the NJ Transit Tracker app.

## Layout Components

### app-root

**Location:** `src/app.ts`

Main root component that wraps the entire application. Handles page routing and manages CSS custom properties.

**Props:**

- None (uses internal state)

**Usage:**

```html
<app-root></app-root>
```

**Features:**

- Defines CSS variables for theming
- Manages page state
- Renders header and active page

---

### app-header

**Location:** `src/components/header/app-header.ts`

Displays the application header with logo and branding.

**Props:**

- None

**Usage:**

```html
<app-header></app-header>
```

**Features:**

- Responsive header layout
- Logo and tagline display
- Professional styling

---

## Card Components

### route-card

**Location:** `src/components/cards/route-card.ts`

Displays detailed information about a transit route.

**Props:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| route | Route | Yes | Route object containing route details |

**Usage:**

```html
<route-card .route="${routeObject}"></route-card>
```

**Features:**

- Shows route name, type (bus/train), status
- Displays next departure time and stop count
- Hover effects for interactivity
- Destination display with truncation
- Responsive grid layout

**Data Structure:**

```typescript
interface Route {
  id: string;
  name: string;
  type: "bus" | "train";
  status: "on-time" | "delayed" | "cancelled";
  nextDeparture: Date;
  destination: string;
  stops: number;
}
```

---

### route-card

**Location:** `src/components/cards/route-card.ts`

Displays route information with status, next departure, and destination details.

**Props:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| route | Route | Yes | Route object containing transit details |

**Usage:**

```html
<route-card .route="${routeObject}"></route-card>
```

**Features:**

- Shows route status and destination
- Displays next departure time
- Highlights stop count
- Responsive layout

**Data Structure:**

```typescript
interface Route {
  id: string;
  name: string;
  type: "bus" | "train";
  status: "on-time" | "delayed" | "cancelled";
  nextDeparture: Date;
  destination: string;
  stops: number;
}
```

---

## Badge Components

### status-badge

**Location:** `src/components/badges/status-badge.ts`

Reusable badge component for displaying status values.

**Props:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| status | StatusType | 'info' | Status to display |
| rounded | Boolean | false | Use rounded style |

**Supported Statuses:**

- `on-time`
- `delayed`
- `cancelled`
- `info`
- `warning`
- `critical`

**Usage:**

```html
<status-badge status="on-time"></status-badge>
<status-badge status="warning" .rounded="${true}"></status-badge>
```

**Features:**

- Color-coded by status type
- Optional rounded corners
- Smooth hover animation
- Reusable across components

---

## Indicator Components

### occupancy-indicator

**Location:** `src/components/indicators/occupancy-indicator.ts`

Visual indicator for vehicle occupancy levels.

**Props:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| percentage | Number | 0 | Occupancy percentage (0-100) |
| label | String | 'Occupancy' | Label text |

**Usage:**

```html
<occupancy-indicator
  .percentage="${75}"
  label="Bus Occupancy"
></occupancy-indicator>
```

**Features:**

- Gradient color bar (green → yellow → red)
- Percentage text display
- Smooth animations
- Responsive design

---

## Loader Components

### loading-spinner

**Location:** `src/components/loaders/loading-spinner.ts`

Animated loading indicator component.

**Props:**
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| message | String | 'Loading...' | Loading message text |
| size | String | 'medium' | Size: 'small', 'medium', or 'large' |

**Usage:**

```html
<loading-spinner></loading-spinner>
<loading-spinner message="Fetching routes..." size="large"></loading-spinner>
```

**Features:**

- Smooth rotating animation
- Configurable size
- Custom message display
- Center-aligned layout

---

## Page Components

### routes-page

**Location:** `src/pages/routes-page.ts`

Full page component for displaying transit routes.

**Props:**

- None

**Usage:**

```html
<routes-page></routes-page>
```

**Features:**

- Displays all routes in responsive grid
- Filter by type (all, bus, train)
- Uses mock data from `src/data/mock-data.ts`
- Empty state message
- Sorting and filtering

---

## Creating New Components

### Template

```typescript
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  @property({ type: String }) message = "";

  static styles = css`
    :host {
      display: block;
    }
    /* Add your styles here */
  `;

  render() {
    return html` <div>${this.message}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyComponent;
  }
}
```

### Best Practices

1. **Component Naming**
   - Use kebab-case for custom element names (e.g., `my-component`)
   - Use PascalCase for class names (e.g., `MyComponent`)

2. **Properties**
   - Use `@property()` decorator for public properties
   - Use `@state()` for private state

3. **Styling**
   - Use CSS custom properties for theme colors
   - Keep components self-contained
   - Avoid global style pollution

4. **Events**
   - Use custom events for component communication
   - Follow naming convention: `lowercase-action` for event names

5. **Accessibility**
   - Use semantic HTML when possible
   - Add ARIA labels for interactive elements
   - Ensure keyboard navigation support

---

## Utility Functions

**Location:** `src/utils/helpers.ts`

### Available Helpers

- `formatTime(date: Date): string` - Format date to time string
- `formatRelativeTime(date: Date): string` - Format date to relative time
- `getStatusClass(status: string): string` - Get CSS class for status
- `getTransitTypeIcon(type: 'bus' | 'train'): string` - Get emoji icon
- `calculateDistance(lat1, lng1, lat2, lng2): number` - Calculate distance in miles

### Usage

```typescript
import { formatTime, getTransitTypeIcon } from "../utils/helpers";

const time = formatTime(new Date());
const icon = getTransitTypeIcon("bus"); // Returns '🚌'
```

---

## CSS Custom Properties

Available CSS variables (defined in `app.ts`):

```css
--primary-color: #0066cc --secondary-color: #333 --background-color: #f5f5f5
  --border-color: #ddd --text-color: #333 --spacing-unit: 1rem;
```

Use in components:

```typescript
color: var(--primary-color);
padding: var(--spacing-unit);
```
