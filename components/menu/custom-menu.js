class CustomMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        nav { display: flex; gap: 1rem; background: var(--primary-color); padding: 0.5rem; }
        a { color: var(--background-color); text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
      <nav>
        <slot></slot>
      </nav>
    `;
  }
}
customElements.define('custom-menu', CustomMenu);
