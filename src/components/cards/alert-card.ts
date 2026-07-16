import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Alert } from "../../models/transit";

@customElement("alert-card")
export class AlertCard extends LitElement {
  @property({ type: Object }) alert!: Alert;

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card.info {
      border-left-color: #2196f3;
      background-color: #e3f2fd;
    }

    .card.warning {
      border-left-color: #ff9800;
      background-color: #fff3e0;
    }

    .card.critical {
      border-left-color: #f44336;
      background-color: #ffebee;
    }

    .alert-content {
      flex: 1;
    }

    .alert-message {
      font-size: 1rem;
      font-weight: 500;
      color: var(--secondary-color, #333);
      margin-bottom: 0.5rem;
    }

    .alert-meta {
      font-size: 0.85rem;
      color: #666;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .alert-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .alert-badge.info {
      background-color: #bbdefb;
      color: #01579b;
    }

    .alert-badge.warning {
      background-color: #ffe0b2;
      color: #e65100;
    }

    .alert-badge.critical {
      background-color: #ef9a9a;
      color: #b71c1c;
    }

    .resolved-badge {
      background-color: #c8e6c9;
      color: #2e7d32;
    }

    .timestamp {
      font-size: 0.8rem;
      color: #999;
    }
  `;

  render() {
    const timestamp = this.formatTime(this.alert.timestamp);

    return html`
      <div class="card ${this.alert.severity}">
        <div class="alert-content">
          <div class="alert-message">${this.alert.message}</div>
          <div class="alert-meta">
            <span class="alert-badge ${this.alert.severity}">
              ${this.alert.severity}
            </span>
            ${this.alert.resolved
              ? html`<span class="alert-badge resolved-badge">Resolved</span>`
              : ""}
            <span class="timestamp">${timestamp}</span>
          </div>
        </div>
      </div>
    `;
  }

  private formatTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "alert-card": AlertCard;
  }
}
