import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("loading-spinner")
export class LoadingSpinner extends LitElement {
  @property({ type: String }) message = "Loading...";
  @property({ type: String }) size: "small" | "medium" | "large" = "medium";

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid var(--primary-color, #0066cc);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner.small {
      width: 24px;
      height: 24px;
    }

    .spinner.medium {
      width: 40px;
      height: 40px;
    }

    .spinner.large {
      width: 56px;
      height: 56px;
    }

    .message {
      font-size: 0.95rem;
      color: #666;
      text-align: center;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  render() {
    return html`
      <div class="spinner-container">
        <div class="spinner ${this.size}"></div>
        <div class="message">${this.message}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "loading-spinner": LoadingSpinner;
  }
}
