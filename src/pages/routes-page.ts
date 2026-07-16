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

  constructor() {
    super();
    this.routes = mockRoutes;
    this.filter = "all";
  }

  static styles = unsafeCSS(styles);

  render() {
    const filteredRoutes = this.getFilteredRoutes();

    return html`
      <div class="page-container">
        <div class="page-header">
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

  private getFilteredRoutes(): Route[] {
    if (this.filter === "all") {
      return this.routes;
    }
    return this.routes.filter((route) => route.type === this.filter);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "routes-page": RoutesPage;
  }
}
