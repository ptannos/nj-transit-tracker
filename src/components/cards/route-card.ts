import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Route } from "../../models/transit";
import styles from "./route-card.css.ts";

@customElement("route-card")
export class RouteCard extends LitElement {
  @property({ type: Object }) declare route: Route;

  static styles = unsafeCSS(styles);

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
