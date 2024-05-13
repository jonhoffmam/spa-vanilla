class FooterComponent extends HTMLElement {
  html = '';

  constructor() {
    super();

    this.getHtml().then(() => {
      this.innerHTML = this.html;
    });
  }

  async getHtml() {
    this.html = await fetch('footer.html').then((resp) => resp.text());
  }
}

export default function footerComponent() {
  customElements.define('spa-footer', FooterComponent);
}
