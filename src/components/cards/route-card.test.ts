// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { RouteCard } from "./route-card";
import type { Route } from "../../models/transit";

import "./route-card";

describe("RouteCard", () => {
  it("renders route details from the provided route", async () => {
    const route: Route = {
      id: "nj-191",
      name: "Route 191",
      type: "bus",
      status: "on-time",
      nextDeparture: new Date("2026-07-16T08:30:00Z"),
      destination: "Port Authority - 42nd St",
      stops: 8,
    };

    const element = document.createElement("route-card") as RouteCard;
    element.route = route;
    document.body.appendChild(element);

    await element.updateComplete;

    const name = element.shadowRoot
      ?.querySelector(".route-name")
      ?.textContent?.trim();
    const destination = element.shadowRoot
      ?.querySelector(".destination")
      ?.textContent?.trim();
    const status = element.shadowRoot
      ?.querySelector(".status-badge")
      ?.textContent?.trim();
    const statusClass =
      element.shadowRoot?.querySelector(".status-badge")?.className;
    const routeType = element.shadowRoot
      ?.querySelector(".route-type")
      ?.textContent?.trim();
    const departureTime = element.shadowRoot
      ?.querySelector(".info-value")
      ?.textContent?.trim();

    expect(name).toBe("Route 191");
    expect(destination).toContain("Port Authority");
    expect(status).toBe("on-time");
    expect(statusClass).toContain("on-time");
    expect(routeType).toBe("bus");
    expect(departureTime).toBe(
      route.nextDeparture.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    );

    element.remove();
  });
});
