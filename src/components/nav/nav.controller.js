class NavComponent extends HTMLElement {
  html = '';

  constructor() {
    super();

    this.getHtml().then(() => {
      this.innerHTML = this.html;
    });
  }

  async getHtml() {
    this.html = await fetch('nav.html').then((resp) => resp.text());
  }
}

export default function navComponent() {
  customElements.define('spa-nav', NavComponent);
}
