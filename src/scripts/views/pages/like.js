import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/like-item.js';
import FavoriteRestaurantSearchView from './liked-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurant/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return `
      <like-item></like-item>
    `;
    // return view.getTemplate();
  },

  async afterRender() {
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    // const restaurantContainer = document.querySelector('#restaurants');
    // restaurant.forEach((resto) => {
    //   restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
    const hero = document.querySelector('.hero');
    if (!hero.classList.contains('skip-hero')) {
      hero.classList.toggle('skip-hero');
    }
  },
};

export default Like;
