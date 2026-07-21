// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { mockRoutes } from "../data/mock-data";
import { RoutesPage } from "./routes-page";

import "./routes-page";

describe("RoutesPage", () => {
  it("renders a limited set of routes by default and filters by transport type", async () => {
    const element = document.createElement("routes-page") as RoutesPage;
    document.body.appendChild(element);

    await element.updateComplete;

    const initialCards = element.shadowRoot?.querySelectorAll("route-card");
    expect(initialCards?.length).toBeLessThan(mockRoutes.length);

    const loadMoreButton = element.shadowRoot?.querySelector(
      "button.load-more-button",
    );
    expect(loadMoreButton).not.toBeNull();

    const busButton = Array.from(
      element.shadowRoot?.querySelectorAll("button") ?? [],
    ).find((button) => button.textContent?.trim() === "Buses");

    busButton?.click();
    await element.updateComplete;

    const filteredCards = Array.from(
      element.shadowRoot?.querySelectorAll("route-card") ?? [],
    );
    await Promise.all(filteredCards.map((card) => card.updateComplete));

    expect(filteredCards.length).toBeLessThanOrEqual(
      mockRoutes.filter((route) => route.type === "bus").length,
    );

    const visibleRouteNames = filteredCards
      .map((card) =>
        card.shadowRoot?.querySelector(".route-name")?.textContent?.trim(),
      )
      .filter((name): name is string => Boolean(name));

    expect(visibleRouteNames.length).toBeGreaterThan(0);
    expect(
      visibleRouteNames.every((name) =>
        mockRoutes.some((route) => route.name === name && route.type === "bus"),
      ),
    ).toBe(true);

    element.remove();
  });

  it("expands the visible routes when the load more button is pressed", async () => {
    const element = document.createElement("routes-page") as RoutesPage;
    document.body.appendChild(element);

    await element.updateComplete;

    const initialCards = Array.from(
      element.shadowRoot?.querySelectorAll("route-card") ?? [],
    );

    const loadMoreButton = element.shadowRoot?.querySelector(
      "button.load-more-button",
    ) as HTMLButtonElement | null;

    expect(loadMoreButton).not.toBeNull();

    loadMoreButton?.click();
    await element.updateComplete;

    const expandedCards = Array.from(
      element.shadowRoot?.querySelectorAll("route-card") ?? [],
    );

    expect(expandedCards.length).toBeGreaterThan(initialCards.length);

    element.remove();
  });

  it("filters routes by search text for bus numbers and train names", async () => {
    const element = document.createElement("routes-page") as RoutesPage;
    document.body.appendChild(element);

    await element.updateComplete;

    const searchInput = element.shadowRoot?.querySelector(
      'input[placeholder="Search by route number or train name"]',
    ) as HTMLInputElement | null;

    expect(searchInput).not.toBeNull();

    searchInput!.value = "191";
    searchInput!.dispatchEvent(new Event("input"));
    await element.updateComplete;

    const filteredCards = Array.from(
      element.shadowRoot?.querySelectorAll("route-card") ?? [],
    );
    await Promise.all(filteredCards.map((card) => card.updateComplete));

    expect(filteredCards).toHaveLength(2);
    const visibleRouteNames = filteredCards
      .map((card) =>
        card.shadowRoot?.querySelector(".route-name")?.textContent?.trim(),
      )
      .filter((name): name is string => Boolean(name));

    expect(visibleRouteNames).toEqual(["Route 191", "Route 191X"]);

    element.remove();
  });
});
