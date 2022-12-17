import RestaurantDbSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
    <div class="jumbotron">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
          <img 
            src="./images/hero-image_4-large.jpg" 
            alt="resto image"></img>
        </picture>
        </div>
    <section class="restaurant">
    <h1 class="restaurant-title" id="maincontent" tabindex="0">Explore Restaurant</h1>
    <div class="restaurant-list"></div>
  </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurants();
    const itemsContainer = document.querySelector('.restaurant-list');
    restaurants.forEach((restaurant) => {
      itemsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default homePage;
