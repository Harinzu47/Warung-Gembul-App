import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Beranda from '../views/pages/beranda';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/favorite': Favorite,
  '/resto/:id': Detail,
};

export default routes;
