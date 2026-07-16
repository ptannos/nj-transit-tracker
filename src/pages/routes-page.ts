import { LitElement, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { mockRoutes } from "../data/mock-data";
import { Route } from "../models/transit";
import "../components/cards/route-card";
import styles from "./routes-page.css.ts";

@customElement("routes-page")
export class RoutesPage extends LitElement {
  @state() declare routes: Route[];
  @state() declare filter: "all" | "bus" | "train";
  @state() declare searchTerm: string;

  constructor() {
    super();
    this.routes = mockRoutes;
    this.filter = "all";
    this.searchTerm = "";
  }

  static styles = unsafeCSS(styles);

  render() {
    const filteredRoutes = this.getFilteredRoutes();

    return html`
      <div class="page-container">
        <div class="page-header">
          <div class="search-controls">
            <input
              class="search-input"
              type="search"
              placeholder="Search by route number or train name"
              .value=${this.searchTerm}
              @input=${this.handleSearch}
              aria-label="Search routes"
            />
          </div>
          <div class="filter-controls">
            <button
              class="filter-btn ${this.filter === "all" ? "active" : ""}"
              @click=${() => this.setFilter("all")}
            >
              All
            </button>
            <button
              class="filter-btn ${this.filter === "bus" ? "active" : ""}"
              @click=${() => this.setFilter("bus")}
            >
              Buses
            </button>
            <button
              class="filter-btn ${this.filter === "train" ? "active" : ""}"
              @click=${() => this.setFilter("train")}
            >
              Trains
            </button>
          </div>
        </div>

        <div class="routes-grid">
          ${filteredRoutes.length > 0
            ? filteredRoutes.map(
                (route) => html`<route-card .route=${route}></route-card>`,
              )
            : html`
                <div class="empty-state">
                  <div class="empty-state-icon">🚫</div>
                  <p>No routes available for this filter.</p>
                </div>
              `}
        </div>
      </div>
    `;
  }

  private setFilter(filter: "all" | "bus" | "train") {
    this.filter = filter;
  }

  private handleSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.trim().toLowerCase();
  }

  private getFilteredRoutes(): Route[] {
    const normalizedSearchTerm = this.searchTerm.trim().toLowerCase();

    return this.routes.filter((route) => {
      const matchesType = this.filter === "all" || route.type === this.filter;
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        route.name.toLowerCase().includes(normalizedSearchTerm) ||
        route.destination.toLowerCase().includes(normalizedSearchTerm);

      return matchesType && matchesSearch;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "routes-page": RoutesPage;
  }
}
