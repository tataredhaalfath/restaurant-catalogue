import Catalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Catalogue, // default page
  '/catalogue': Catalogue,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
