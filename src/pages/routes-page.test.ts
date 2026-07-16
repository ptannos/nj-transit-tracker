// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { mockRoutes } from "../data/mock-data";
import { RoutesPage } from "./routes-page";

import "./routes-page";

describe("RoutesPage", () => {
  it("renders all routes by default and filters by transport type", async () => {
    const element = document.createElement("routes-page") as RoutesPage;
    document.body.appendChild(element);

    await element.updateComplete;

    const initialCards = element.shadowRoot?.querySelectorAll("route-card");
    expect(initialCards).toHaveLength(mockRoutes.length);

    const busButton = Array.from(
      element.shadowRoot?.querySelectorAll("button") ?? [],
    ).find((button) => button.textContent?.trim() === "Buses");

    busButton?.click();
    await element.updateComplete;

    const filteredCards = Array.from(
      element.shadowRoot?.querySelectorAll("route-card") ?? [],
    );
    await Promise.all(filteredCards.map((card) => card.updateComplete));

    expect(filteredCards).toHaveLength(
      mockRoutes.filter((route) => route.type === "bus").length,
    );

    const visibleRouteNames = filteredCards
      .map((card) =>
        card.shadowRoot?.querySelector(".route-name")?.textContent?.trim(),
      )
      .filter((name): name is string => Boolean(name));

    expect(visibleRouteNames).toContain("Route 191");
    expect(visibleRouteNames).toContain("Route 128");

    element.remove();
  });
});
