import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="restaurant__title">${resto.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Kota</h4>
    <p>${resto.city}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
  </div>
  <div class="restaurant__menu">
    <h4>Foods Menu</h4>
    <span id="food">
      <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
    </span>
    <br>
    <h4>Drinks Menu</h4>
    <span id="drink">
      <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
    </span>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p> Name : ${reviews.name}</p>
    <p> Date : ${reviews.date}</p>
    <p> Review : ${reviews.review}</p>
  </div>

`;

const createRestoItemTemplate = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="lazyload restaurant-item__header__poster" alt="${resto.name || '-'}"
            data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="restaurant image">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${resto.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${resto.id}`}">${resto.name || '-'}</a></h3>
        <p>${resto.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
