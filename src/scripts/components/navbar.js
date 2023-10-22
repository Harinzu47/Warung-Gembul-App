class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar">
            <div>
                <a href="/">Warung Gembul</a>
            </div>
            <button class="hamburger" type="button">
                <img src="./images/heros/icons8-hamburger-menu-50-removebg-preview.png" alt="Hamburger Menu">
            </button>
            <ul class="nav-list">
                <li class="nav-item"><a href="#/beranda">Beranda</a></li>
                <li class="nav-item"><a href="#/favorite">Favorite</a></li>
                <li class="nav-item"><a href="https://www.linkedin.com/in/khalid-jundullah-8086b8249/" target="_blank" rel="noopener noreferrer">Kontak</a></li>
            </ul>
        </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
