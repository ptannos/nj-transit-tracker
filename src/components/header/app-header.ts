import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./app-header.css.ts";

@customElement("app-header")
export class AppHeader extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="header-content">
        <div class="logo">
          <div>
            <div>NJ Transit Tracker</div>
            <div class="tagline">Real-time Bus & Train Updates</div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-header": AppHeader;
  }
}
