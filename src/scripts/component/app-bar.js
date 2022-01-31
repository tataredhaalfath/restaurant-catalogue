class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="drawer">
          <div class="nav-content">
            <div class="nav-brand">
              <h1>Restaurant</h1>
            </div>
            <button id="hamburger" aria-label="navigation-menu">☰</button>
            <ul class="nav-menu">
              <li class="nav-item"><a href="/">Home</a></li>
              <li class="nav-item"><a href="#/favorite">Favorite</a></li>
              <li class="nav-item">
                <a
                  href="https://github.com/tataredhaalfath"
                  rel="noreferrer"
                  target="_blank"
                  >AboutUs</a
                >
            </li>
            </ul>
          </div>
        </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
