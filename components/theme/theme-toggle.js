class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('button').addEventListener('click', this.toggleTheme);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click', this.toggleTheme);
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button { background: none; border: 1px solid var(--primary-color); color: var(--text-color); padding: 0.25rem 0.5rem; border-radius: 4px; cursor: pointer; }
      </style>
      <button>Toggle Theme</button>
    `;
  }
}
customElements.define('theme-toggle', ThemeToggle);
