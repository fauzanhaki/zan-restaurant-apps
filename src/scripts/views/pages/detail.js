import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-source';
import {
  createRestoDetailTemplate,
  createFoodsTemplate,
  createDrinksTemplate,
  createReviewsTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const detailPage = {
  async render() {
    return `
      <div class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant-detail');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
    createFoodsTemplate(restaurant.menus.foods);
    createDrinksTemplate(restaurant.menus.drinks);
    createReviewsTemplate(restaurant.customerReviews);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        id: restaurant.id,
        address: restaurant.address,
        city: restaurant.city,
        description: restaurant.description,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default detailPage;
