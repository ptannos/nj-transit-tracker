import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("app-nav")
export class AppNav extends LitElement {
  @state() activePage = "routes";

  static styles = css`
    :host {
      display: block;
      background-color: white;
      border-bottom: 1px solid var(--border-color, #ddd);
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      gap: 2rem;
      padding: 0 1rem;
    }

    nav-button {
      cursor: pointer;
      padding: 1rem 1.5rem;
      border: none;
      background: none;
      font-size: 1rem;
      color: var(--secondary-color, #333);
      border-bottom: 3px solid transparent;
      transition: all 0.3s ease;
    }

    nav-button:hover {
      background-color: var(--background-color, #f5f5f5);
    }

    nav-button.active {
      color: var(--primary-color, #0066cc);
      border-bottom-color: var(--primary-color, #0066cc);
    }
  `;

  render() {
    return html`
      <div class="nav-content">
        <button
          class="nav-button ${this.activePage === "routes" ? "active" : ""}"
          @click=${() => this.setPage("routes")}
        >
          Routes
        </button>
        <button
          class="nav-button ${this.activePage === "alerts" ? "active" : ""}"
          @click=${() => this.setPage("alerts")}
        >
          Alerts
        </button>
      </div>
    `;
  }

  private setPage(page: string) {
    this.activePage = page;
    this.dispatchEvent(
      new CustomEvent("page-changed", {
        detail: { page },
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-nav": AppNav;
  }
}
