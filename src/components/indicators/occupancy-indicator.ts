import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("occupancy-indicator")
export class OccupancyIndicator extends LitElement {
  @property({ type: Number }) percentage = 0;
  @property({ type: String }) label = "Occupancy";

  static styles = css`
    :host {
      display: block;
    }

    .occupancy-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .occupancy-label {
      font-size: 0.85rem;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .occupancy-bar {
      width: 100%;
      height: 8px;
      background-color: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
    }

    .occupancy-fill {
      height: 100%;
      background: linear-gradient(90deg, #4caf50, #ffc107, #ff6b6b);
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .occupancy-text {
      font-size: 0.9rem;
      font-weight: 500;
      color: #333;
    }
  `;

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
