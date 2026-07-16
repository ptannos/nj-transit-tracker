import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./occupancy-indicator.css.ts";

@customElement("occupancy-indicator")
export class OccupancyIndicator extends LitElement {
  @property({ type: Number }) declare percentage: number;
  @property({ type: String }) declare label: string;

  constructor() {
    super();
    this.percentage = 0;
    this.label = "Occupancy";
  }

  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="occupancy-container">
        <div class="occupancy-label">${this.label}</div>
        <div class="occupancy-bar">
          <div class="occupancy-fill" style="width: ${this.percentage}%"></div>
        </div>
        <div class="occupancy-text">${this.percentage}% full</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "occupancy-indicator": OccupancyIndicator;
  }
}
