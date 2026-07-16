import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Route } from "../../models/transit";

@customElement("route-card")
export class RouteCard extends LitElement {
  @property({ type: Object }) route!: Route;

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      border: 1px solid var(--border-color, #ddd);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--border-color, #ddd);
      padding-bottom: 1rem;
    }

    .route-name {
      font-size: 1.25rem;
      font-weight: bold;
      color: var(--secondary-color, #333);
    }

    .route-type {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .route-type.bus {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .route-type.train {
      background-color: #f3e5f5;
      color: #7b1fa2;
    }

    .status-badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .status-badge.on-time {
      background-color: #c8e6c9;
      color: #2e7d32;
    }

    .status-badge.delayed {
      background-color: #ffe0b2;
      color: #e65100;
    }

    .status-badge.cancelled {
      background-color: #ffcdd2;
      color: #c62828;
    }

    .card-body {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }

    .info-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .info-label {
      font-size: 0.85rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 1rem;
      color: var(--secondary-color, #333);
      font-weight: 500;
    }

    .destination {
      font-size: 0.95rem;
      color: var(--primary-color, #0066cc);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;

  render() {
    const departureTime = this.formatTime(this.route.nextDeparture);

    return html`
      <div class="card">
        <div class="card-header">
          <div>
            <div class="route-name">${this.route.name}</div>
            <div class="destination">→ ${this.route.destination}</div>
          </div>
          <div>
            <span class="route-type ${this.route.type}"
              >${this.route.type}</span
            >
          </div>
        </div>
        <div class="card-body">
          <div class="info-item">
            <span class="info-label">Status</span>
            <span class="status-badge ${this.route.status}"
              >${this.route.status}</span
            >
          </div>
          <div class="info-item">
            <span class="info-label">Next Departure</span>
            <span class="info-value">${departureTime}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Stops</span>
            <span class="info-value">${this.route.stops}</span>
          </div>
        </div>
      </div>
    `;
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "route-card": RouteCard;
  }
}
