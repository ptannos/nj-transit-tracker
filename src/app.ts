import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/header/app-header";
import "./components/navigation/app-nav";
import "./pages/routes-page";
import "./pages/alerts-page";

@customElement("app-root")
export class App extends LitElement {
  private currentPage = "routes";

  static styles = css`
    :host {
      --primary-color: #0066cc;
      --secondary-color: #333;
      --background-color: #f5f5f5;
      --border-color: #ddd;
      --text-color: #333;
      --spacing-unit: 1rem;
    }

    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--background-color);
    }

    .main-content {
      flex: 1;
      padding: var(--spacing-unit);
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="app-container">
        <app-header></app-header>
        <app-nav @page-changed=${this.handlePageChange}></app-nav>
        <div class="main-content">
          ${this.currentPage === "routes"
            ? html`<routes-page></routes-page>`
            : ""}
          ${this.currentPage === "alerts"
            ? html`<alerts-page></alerts-page>`
            : ""}
        </div>
      </div>
    `;
  }

  private handlePageChange(event: CustomEvent) {
    this.currentPage = event.detail.page;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-root": App;
  }
}
