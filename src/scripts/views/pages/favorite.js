import favRestoIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const favoritePage = {
  async render() {
    return `
    <section class="restaurant" id="maincontent">
      <h1 class="favorite-header" tabindex="0">Favorite Restaurant</h1>
      <div class="restaurant-list"></div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await favRestoIdb.getAllRestaurants();
    const cardsContainer = document.querySelector('.restaurant-list');
    const restaurantContainer = document.querySelector('.restaurant');
    if (Object.keys(restaurants).length === 0) {
      const createText = document.createElement('h4');
      createText.classList.add('favoriteNull');
      // eslint-disable-next-line quotes
      createText.innerHTML = `You don't have any favorite restaurant yet`;
      restaurantContainer.appendChild(createText);
    } else {
      restaurants.forEach((restaurant) => {
        cardsContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    }
  },
};

export default favoritePage;
