class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('content');
    this.innerHTML = `
        <h2 class="content__heading">Restaurant Catalogue</h2>
        <div id="restaurants" class="restaurants">

        </div>
    `;
  }
}

customElements.define('restaurant-list', RestaurantList);
