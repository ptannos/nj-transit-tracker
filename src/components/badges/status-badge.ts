import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./status-badge.css.ts";

export type StatusType =
  | "on-time"
  | "delayed"
  | "cancelled"
  | "info"
  | "warning"
  | "critical";

@customElement("status-badge")
export class StatusBadge extends LitElement {
  @property({ type: String }) declare status: StatusType;
  @property({ type: Boolean }) declare rounded: boolean;

  constructor() {
    super();
    this.status = "info";
    this.rounded = false;
  }

  static styles = unsafeCSS(styles);

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
