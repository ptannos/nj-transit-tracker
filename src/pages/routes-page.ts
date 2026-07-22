import { LitElement, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { mockRoutes } from "../data/mock-data";
import { Route } from "../models/transit";
import "../components/cards/route-card";
import styles from "./routes-page.css.ts";

const INITIAL_VISIBLE_ROWS = 5;
const INITIAL_VISIBLE_COLUMNS = 3;
const NEXT_VISIBLE_ROWS = 3;
const DEFAULT_VISIBLE_COUNT = INITIAL_VISIBLE_ROWS * INITIAL_VISIBLE_COLUMNS;

@customElement("routes-page")
export class RoutesPage extends LitElement {
  @state() declare routes: Route[];
  @state() declare filter: "all" | "bus" | "train";
  @state() declare searchTerm: string;
  @state() declare visibleCount: number;
  @state() declare isFilterDropdownOpen: boolean;

  constructor() {
    super();
    this.routes = mockRoutes;
    this.filter = "all";
    this.searchTerm = "";
    this.visibleCount = DEFAULT_VISIBLE_COUNT;
    this.isFilterDropdownOpen = false;
  }

  static styles = unsafeCSS(styles);

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("resize", this.handleResize);
  }

  disconnectedCallback(): void {
    window.removeEventListener("resize", this.handleResize);
    super.disconnectedCallback();
  }

  firstUpdated(): void {
    requestAnimationFrame(() => {
      this.visibleCount = this.getInitialVisibleCount();
    });
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  render() {
    const filteredRoutes = this.getFilteredRoutes();
    const visibleRoutes = filteredRoutes.slice(0, this.visibleCount);
    const hasMoreRoutes = visibleRoutes.length < filteredRoutes.length;

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
            <button
              class="filter-btn"
              @click=${this.toggleFilterDropdown}
              aria-haspopup="true"
              aria-expanded=${this.isFilterDropdownOpen ? "true" : "false"}
            >
              More Filters
            </button>
            ${this.isFilterDropdownOpen
              ? html`
                  <div class="filter-dropdown">
                    <p>Additional filter options can go here.</p>
                  </div>
                `
              : ""}
          </div>
        </div>

        <div class="routes-grid">
          ${filteredRoutes.length > 0
            ? visibleRoutes.map(
                (route) => html`<route-card .route=${route}></route-card>`,
              )
            : html`
                <div class="empty-state">
                  <p>No routes available for this filter.</p>
                </div>
              `}
        </div>

        ${hasMoreRoutes
          ? html`
              <div class="load-more-container">
                <button class="load-more-button" @click=${this.loadMoreRoutes}>
                  Load more
                </button>
              </div>
            `
          : ""}
      </div>
    `;
  }

  private setFilter(filter: "all" | "bus" | "train") {
    this.filter = filter;
    this.visibleCount = this.getInitialVisibleCount();
  }

  private handleSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.trim().toLowerCase();
    this.visibleCount = this.getInitialVisibleCount();
  }

  private loadMoreRoutes = () => {
    const filteredRoutes = this.getFilteredRoutes();
    const nextCount = this.getNextVisibleCount(filteredRoutes.length);
    this.visibleCount = Math.min(nextCount, filteredRoutes.length);
  };

  private getInitialVisibleCount(): number {
    const filteredRoutes = this.getFilteredRoutes();
    return Math.min(filteredRoutes.length, DEFAULT_VISIBLE_COUNT);
  }

  private getNextVisibleCount(totalRoutes: number): number {
    const nextCount =
      this.visibleCount + NEXT_VISIBLE_ROWS * INITIAL_VISIBLE_COLUMNS;
    return Math.min(totalRoutes, this.roundToFullRow(nextCount));
  }

  private roundToFullRow(count: number): number {
    return Math.max(
      DEFAULT_VISIBLE_COUNT,
      Math.ceil(count / INITIAL_VISIBLE_COLUMNS) * INITIAL_VISIBLE_COLUMNS,
    );
  }

  private handleResize = () => {
    this.visibleCount = this.getInitialVisibleCount();
  };

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
