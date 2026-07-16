import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { mockAlerts } from "../data/mock-data";
import { Alert } from "../models/transit";
import "../components/cards/alert-card";

@customElement("alerts-page")
export class AlertsPage extends LitElement {
  @state() alerts: Alert[] = mockAlerts;
  @state() filterResolved = false;

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
      justify-content: space-between;
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

    .alerts-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .empty-state {
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
    const filteredAlerts = this.getFilteredAlerts();

    return html`
      <div class="page-container">
        <div class="page-header">
          <h1 class="page-title">Service Alerts</h1>
          <div class="filter-controls">
            <button
              class="filter-btn ${!this.filterResolved ? "active" : ""}"
              @click=${() => this.setFilterResolved(false)}
            >
              Active Only
            </button>
            <button
              class="filter-btn ${this.filterResolved ? "active" : ""}"
              @click=${() => this.setFilterResolved(true)}
            >
              All Alerts
            </button>
          </div>
        </div>

        <div class="alerts-list">
          ${filteredAlerts.length > 0
            ? filteredAlerts.map(
                (alert) => html`<alert-card .alert=${alert}></alert-card>`,
              )
            : html`
                <div class="empty-state">
                  <div class="empty-state-icon">✅</div>
                  <p>No alerts at this time. All services running smoothly!</p>
                </div>
              `}
        </div>
      </div>
    `;
  }

  private setFilterResolved(showResolved: boolean) {
    this.filterResolved = showResolved;
  }

  private getFilteredAlerts(): Alert[] {
    if (this.filterResolved) {
      return this.alerts;
    }
    return this.alerts.filter((alert) => !alert.resolved);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "alerts-page": AlertsPage;
  }
}
