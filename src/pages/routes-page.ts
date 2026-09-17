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

const moreFilterOptions = {
  status: {
    label: "Status",
    key: "status",
    options: [
      { key: "on-time", label: "On Time" },
      { key: "delayed", label: "Delayed" },
      { key: "cancelled", label: "Cancelled" },
    ],
  },
};

const sortOptions = {
  departureTime: {
    label: "Departure Time",
    options: [
      { key: "earliest", label: "Earliest" },
      { key: "latest", label: "Latest" },
    ],
  },
};

@customElement("routes-page")
export class RoutesPage extends LitElement {
  @state() declare routes: Route[];
  @state() declare filter: "all" | "bus" | "train";
  @state() declare searchTerm: string;
  @state() declare visibleCount: number;
  @state() declare isFilterDropdownOpen: boolean;
  @state() declare selectedFilters: Record<string, string | boolean>;
  @state() declare selectedSortOption: string;

  constructor() {
    super();
    this.routes = mockRoutes;
    this.filter = "all";
    this.searchTerm = "";
    this.visibleCount = DEFAULT_VISIBLE_COUNT;
    this.isFilterDropdownOpen = false;
    this.selectedFilters = {};
    this.selectedSortOption = "";
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

  #toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  #getSelectedFilters(): Record<string, string | boolean> {
    const selectedFilters: Record<string, string | boolean> = {};
    Object.entries(sortOptions).forEach(([key, _options]) => {
      const name = `sort-${key}`;
      const selectedOption = this.shadowRoot?.querySelector(
        `input[name="${name}"]:checked`,
      ) as HTMLInputElement | null;
      if (selectedOption) {
        selectedFilters[key] = selectedOption.value || selectedOption.id;
      }
    });

    Object.entries(moreFilterOptions).forEach(([key, filter]) => {
      filter.options.forEach((option) => {
        const checkbox = this.shadowRoot?.querySelector(
          `input[id="${option.key}"]`,
        ) as HTMLInputElement | null;
        if (checkbox && checkbox.checked) {
          selectedFilters[key] = option.key;
        }
      });
    });
    console.log("Selected Filters:", selectedFilters);
    return selectedFilters;
  }

  #applyFilters() {
    this.isFilterDropdownOpen = false;
    this.selectedFilters = this.#getSelectedFilters();
    this.routes = this.getFilteredRoutes();
    this.visibleCount = this.getInitialVisibleCount();
  }

  #filterDropdownTemplate() {
    return html`<div class="filter-dropdown">
      ${Object.entries(sortOptions).map(
        ([key, options]) => html`
          <div class="filter-dropdown-category">
            <div class="filter-dropdown-label">
              <p>${options.label}:</p>
            </div>
            <div class="filter-dropdown-options">
              ${options.options.map(
                (option) => html`
                  <label class="filter-option">
                    <input
                      type="radio"
                      id=${option.key}
                      name=${`sort-${key}`}
                      value=${option.key}
                    />
                    <span class="option-label">${option.label}</span>
                  </label>
                `,
              )}
            </div>
          </div>
        `,
      )}
      ${Object.entries(moreFilterOptions).map(
        ([key, options]) => html`
          <div class="filter-dropdown-category">
            <div class="filter-dropdown-label">
              <p>${options.label}:</p>
            </div>
            <div class="filter-dropdown-options">
              ${options.options.map(
                (option) => html`
                  <label class="filter-option checkbox">
                    <input
                      type="checkbox"
                      id=${option.key}
                      name=${`${key}[]`}
                    />
                    <span class="option-label">${option.label}</span>
                  </label>
                `,
              )}
            </div>
          </div>
        `,
      )}
      <div class="filter-dropdown-actions">
        <button class="apply-filters-btn" @click=${this.#applyFilters}>
          Apply
        </button>
      </div>
    </div>`;
  }

  render() {
    const filteredRoutes = this.getFilteredRoutes();
    const visibleRoutes = filteredRoutes.slice(0, this.visibleCount);
    const hasMoreRoutes = visibleRoutes.length < filteredRoutes.length;

    return html` <div class="page-container">
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
            class="filter-icon-btn"
            @click=${this.#toggleFilterDropdown}
            aria-haspopup="true"
            aria-expanded=${this.isFilterDropdownOpen ? "true" : "false"}
            aria-label="Open filters"
            title="Filters"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 5h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M6 12h12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M10 19h4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          ${this.isFilterDropdownOpen ? this.#filterDropdownTemplate() : ""}
        </div>
      </div>

      <div class="routes-grid">
        ${visibleRoutes.map(
          (route) => html` <route-card .route=${route}></route-card> `,
        )}
      </div>

      ${hasMoreRoutes
        ? html` <div class="load-more-container">
            <button class="load-more-button" @click=${this.loadMore}>
              Load more
            </button>
          </div>`
        : ""}
    </div>`;
  }

  private getInitialVisibleCount(): number {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    const columns = width >= 1100 ? INITIAL_VISIBLE_COLUMNS : 2;
    return Math.max(DEFAULT_VISIBLE_COUNT, INITIAL_VISIBLE_ROWS * columns);
  }

  private handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  private setFilter(type: "all" | "bus" | "train") {
    this.filter = type;
    this.routes = this.getFilteredRoutes();
    this.visibleCount = this.getInitialVisibleCount();
  }

  private loadMore() {
    this.visibleCount = Math.min(
      this.routes.length,
      this.visibleCount + NEXT_VISIBLE_ROWS * INITIAL_VISIBLE_COLUMNS,
    );
  }

  private handleResize = () => {
    this.visibleCount = this.getInitialVisibleCount();
  };

  private getFilteredRoutes(): Route[] {
    const normalizedSearchTerm = this.searchTerm.trim().toLowerCase();

    return this.routes.filter((route) => {
      const matchesType = this.filter === "all" || route.type === this.filter;
      const matchesMoreFilters = Object.entries(this.selectedFilters).every(
        ([key, value]) => {
          return route[key as keyof Route] === value;
        },
      );
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        route.name.toLowerCase().includes(normalizedSearchTerm) ||
        route.destination.toLowerCase().includes(normalizedSearchTerm);

      return matchesType && matchesSearch && matchesMoreFilters;
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "routes-page": RoutesPage;
  }
}
