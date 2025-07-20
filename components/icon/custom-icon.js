class CustomIcon extends HTMLElement {
  static get observedAttributes() { return ['name']; }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || '';
    const iconMap = {
      menu: '\u2630',
      user: '\u{1F464}',
      search: '\u{1F50D}',
      settings: '\u2699',
      sun: '\u2600',
      moon: '\u1F319'
    };
    const char = iconMap[name] || '';
    this.shadowRoot.innerHTML = `
      <style>
        span { font-family: "Segoe UI Symbol", sans-serif; }
      </style>
      <span>${char}</span>
    `;
  }
}
customElements.define('custom-icon', CustomIcon);
