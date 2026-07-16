import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { mockRoutes } from "../data/mock-data";
import { Route } from "../models/transit";
import "../components/cards/route-card";

@customElement("routes-page")
export class RoutesPage extends LitElement {
  @state() declare routes: Route[];
  @state() declare filter: "all" | "bus" | "train";

  constructor() {
    super();
    this.routes = mockRoutes;
    this.filter = "all";
  }

  static styles = css`
    :host {
      display: block;
    }

    .page-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .page-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-bottom: 2px solid var(--border-color, #ddd);
      padding-bottom: 1.5rem;
    }

    .page-title {
      font-size: 2rem;
      font-weight: bold;
      color: var(--secondary-color, #333);
    }

    .filter-controls {
      display: flex;
      gap: 0.5rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      border: 2px solid var(--border-color, #ddd);
      border-radius: 4px;
      background: white;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .filter-btn:hover {
      border-color: var(--primary-color, #0066cc);
      color: var(--primary-color, #0066cc);
    }

    .filter-btn.active {
      background-color: var(--primary-color, #0066cc);
      color: white;
      border-color: var(--primary-color, #0066cc);
    }

    .routes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem 1rem;
      color: #999;
    }

    .empty-state-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  `;

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
