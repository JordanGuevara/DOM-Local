import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class EspeThemeToggle extends LitElement {
  @property({ type: String }) theme = 'light';
  @property({ type: Boolean }) loading = false;

  static styles = css`
    :host {
      display: inline-block;
      font-family: Arial, Roboto, sans-serif;
    }
    button {
      padding: 8px 16px;
      background-color: var(--color-primario, #003C71);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .spinner {
      width: 12px;
      height: 12px;
      border: 2px solid #f3f3f3;
      border-top: 2px solid white;
      border-radius: 50%;
      display: inline-block;
      margin-left: 8px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;

  toggleTheme() {
    this.loading = true;
    setTimeout(() => {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.loading = false;
      this.dispatchEvent(new CustomEvent('theme-changed', {
        detail: this.theme,
        bubbles: true,
        composed: true
      }));
    }, 500);
  }

  render() {
    return html`
      <button
        @click=${this.toggleTheme}
        ?disabled=${this.loading}
        aria-label="Cambiar tema"
        role="button"
        tabindex="0"
      >
        Tema: ${this.theme}
        ${this.loading ? html`<span class="spinner"></span>` : ''}
      </button>
    `;
  }
}

customElements.define('espe-theme-toggle', EspeThemeToggle);
