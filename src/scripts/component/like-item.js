class LikeItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('content');
    this.innerHTML = `
    <h2 class="content__heading">Your Liked Restaurant</h2>
    <div id="restaurants" class="restaurants">

    </div>
    `;
  }
}

customElements.define('like-item', LikeItem);
