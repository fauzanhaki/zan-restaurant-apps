import homePage from '../views/pages/home';
import favoritePage from '../views/pages/favorite';
import detailPage from '../views/pages/detail';

const routes = {
  '/': homePage, // default page
  '/home': homePage,
  '/favorite': favoritePage,
  '/detail/:id': detailPage,
};

export default routes;
