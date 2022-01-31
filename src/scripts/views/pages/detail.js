import RestaurantApiSource from '../../data/restaurant-api-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import '../../component/detail-item.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <detail-item></detail-item>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#mainContent').focus();
    });
    const detail = await RestaurantApiSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestoDetailTemplate(detail);
    restaurantContainer.innerHTML += `
      <h4> Review </h4>
      <div class='restaurant__review'>
          
      </div>
    `;
    restaurantContainer.innerHTML += `
      
      <div class='add__review'>
      <h4>Add Review</h4>
        <form class='submit-review' methos='post' action=''>
          <input type='hidden' id='reviewID' value='${detail.id}'>
          <div class='form-group'>
            <label for='name'>Nama</label>
            <input type='text' id='name' required>
          </div>
          <div class='form-group'>
            <label for='review'>Review</label>
            <textarea id='review' required></textarea>
          </div>
          <button aria-label="add review" type='submit' class='btn-submit'> Add Review </button>
        </form>
      </div>
      
    `;

    const addReview = document.querySelector('.submit-review');
    addReview.addEventListener('submit', async (e) => {
      const inputReviewId = document.querySelector('#reviewID');
      const inputReviewName = document.querySelector('#name');
      const inputReviewRev = document.querySelector('#review');
      e.preventDefault();

      const input = {
        id: inputReviewId.value,
        name: inputReviewName.value,
        review: inputReviewRev.value,
      };

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      };

      const add = await RestaurantApiSource.addReview(options);
      if (add.status === 201) {
        console.log('masuk');
        alert('review added. please reload the page to see new review');
      }
    });

    const restaurantReview = document.querySelector('.restaurant__review');
    detail.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestoReviewTemplate(review);
    });
    const hero = document.querySelector('.hero');
    if (!hero.classList.contains('skip-hero')) {
      hero.classList.toggle('skip-hero');
    }
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
