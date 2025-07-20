class CustomPanel extends HTMLElement {
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
        :host { display: block; border-top: 3px solid var(--primary-color); padding: 1rem; background: var(--background-color); color: var(--text-color); }
        header { font-size: 1.2rem; margin-bottom: 0.5rem; }
      </style>
      <header><slot name="header"></slot></header>
      <section><slot></slot></section>
    `;
  }
}
customElements.define('custom-panel', CustomPanel);
