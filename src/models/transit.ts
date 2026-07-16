export interface Route {
  id: string;
  name: string;
  type: "bus" | "train";
  status: "on-time" | "delayed" | "cancelled";
  nextDeparture: Date;
  destination: string;
  stops: number;
}

export interface Alert {
  id: string;
  routeId: string;
  message: string;
  severity: "info" | "warning" | "critical";
  timestamp: Date;
  resolved: boolean;
}

export interface Stop {
  id: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  accessibility: boolean;
}

export interface Vehicle {
  id: string;
  routeId: string;
  location: {
    lat: number;
    lng: number;
  };
  status: "active" | "inactive";
  occupancy: number; // percentage
}
