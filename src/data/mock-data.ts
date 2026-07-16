import { Route, Alert, Vehicle } from "../models/transit";

export const mockRoutes: Route[] = [
  {
    id: "nj-191",
    name: "Route 191",
    type: "bus",
    status: "on-time",
    nextDeparture: new Date(Date.now() + 5 * 60000),
    destination: "Port Authority - 42nd St",
    stops: 8,
  },
  {
    id: "nj-128",
    name: "Route 128",
    type: "bus",
    status: "delayed",
    nextDeparture: new Date(Date.now() + 15 * 60000),
    destination: "Newark Penn Station",
    stops: 12,
  },
  {
    id: "nj-northeast-corridor",
    name: "Northeast Corridor",
    type: "train",
    status: "on-time",
    nextDeparture: new Date(Date.now() + 20 * 60000),
    destination: "New York Penn Station",
    stops: 15,
  },
  {
    id: "nj-river-line",
    name: "River LINE",
    type: "train",
    status: "cancelled",
    nextDeparture: new Date(Date.now() + 45 * 60000),
    destination: "Trenton Transit Center",
    stops: 24,
  },
  {
    id: "nj-191x",
    name: "Route 191X",
    type: "bus",
    status: "on-time",
    nextDeparture: new Date(Date.now() + 10 * 60000),
    destination: "Port Authority - 42nd St",
    stops: 6,
  },
];

export const mockAlerts: Alert[] = [
  {
    id: "alert-1",
    routeId: "nj-128",
    message: "Delayed due to traffic congestion on Route 128",
    severity: "warning",
    timestamp: new Date(Date.now() - 10 * 60000),
    resolved: false,
  },
  {
    id: "alert-2",
    routeId: "nj-river-line",
    message: "Service suspension for maintenance work",
    severity: "critical",
    timestamp: new Date(Date.now() - 30 * 60000),
    resolved: false,
  },
  {
    id: "alert-3",
    routeId: "nj-191",
    message: "Running on-time schedule",
    severity: "info",
    timestamp: new Date(Date.now() - 60 * 60000),
    resolved: true,
  },
];

export const mockVehicles: Vehicle[] = [
  {
    id: "bus-001",
    routeId: "nj-191",
    location: { lat: 40.7128, lng: -74.006 },
    status: "active",
    occupancy: 75,
  },
  {
    id: "bus-002",
    routeId: "nj-128",
    location: { lat: 40.735, lng: -74.01 },
    status: "active",
    occupancy: 45,
  },
  {
    id: "train-001",
    routeId: "nj-northeast-corridor",
    location: { lat: 40.75, lng: -74.0 },
    status: "active",
    occupancy: 85,
  },
];
