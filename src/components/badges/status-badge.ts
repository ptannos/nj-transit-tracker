import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

export type StatusType =
  | "on-time"
  | "delayed"
  | "cancelled"
  | "info"
  | "warning"
  | "critical";

@customElement("status-badge")
export class StatusBadge extends LitElement {
  @property({ type: String }) status: StatusType = "info";
  @property({ type: Boolean }) rounded = false;

  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: capitalize;
      transition: transform 0.2s ease;
    }

    .badge.rounded {
      border-radius: 20px;
      padding: 0.35rem 0.75rem;
      font-size: 0.8rem;
    }

    .badge:hover {
      transform: scale(1.05);
    }

    .badge.on-time {
      background-color: #c8e6c9;
      color: #2e7d32;
    }

    .badge.delayed {
      background-color: #ffe0b2;
      color: #e65100;
    }

    .badge.cancelled {
      background-color: #ffcdd2;
      color: #c62828;
    }

    .badge.info {
      background-color: #bbdefb;
      color: #01579b;
    }

    .badge.warning {
      background-color: #ffe0b2;
      color: #e65100;
    }

    .badge.critical {
      background-color: #ef9a9a;
      color: #b71c1c;
    }
  `;

  render() {
    const classes = `badge ${this.status} ${this.rounded ? "rounded" : ""}`;
    return html`<span class="${classes}"
      >${this.status.replace("-", " ")}</span
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "status-badge": StatusBadge;
  }
}
