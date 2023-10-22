class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div tabindex="0" class="hero">
    <picture>
    <source media="(max-width:600px)" srcset="./images/hero-image-3-small.jpg">
    <img src="./images/hero-image-3-large.jpg" alt="Hero Image">
    </picture>
    <div class="hero-text">
      <h1>Warung Gembul</h1>
      <p>Rasakan Masakan Dalam Negeri Yang Tidak Akan Terlupakan</p>
    </div>
  </div>
      `;
  }
}

customElements.define('hero-component', HeroComponent);
