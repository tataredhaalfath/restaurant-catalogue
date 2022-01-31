class HeroEl extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('hero');
    this.setAttribute('id', 'hero');
    this.innerHTML = `

                <div class="hero__content">
                  <h1>
                    Find Your Favorite Resto With<br />
                    The Simple Step
                  </h1>
                  <p>Make your culinary experience more meaningful</p>
              </div>

    `;
  }
}

customElements.define('hero-el', HeroEl);
