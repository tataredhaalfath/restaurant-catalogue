import RestaurantApiSource from '../../data/restaurant-api-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/restaurant-list.js';

const Catalogue = {
  async render() {
    return `
      <restaurant-list> </restaurant-list>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const catalogue = await RestaurantApiSource.catalogue();
    const restaurantsContainer = document.querySelector('#restaurants');
    catalogue.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
    const hero = document.querySelector('.hero');
    if (hero.classList.contains('skip-hero')) {
      hero.classList.remove('skip-hero');
    }
  },
};

export default Catalogue;
