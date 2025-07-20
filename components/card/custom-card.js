class CustomCard extends HTMLElement {
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
        :host { display: block; border: 1px solid var(--primary-color); padding: 1rem; border-radius: 4px; background: var(--background-color); color: var(--text-color); }
        header { font-weight: bold; margin-bottom: 0.5rem; }
      </style>
      <header><slot name="header"></slot></header>
      <section><slot></slot></section>
    `;
  }
}
customElements.define('custom-card', CustomCard);
