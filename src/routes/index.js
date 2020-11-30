// import Header from '../templates/Header';
// import Home from '../pages/Home';
// import Character from '../pages/Character';
// import Error404 from '../pages/Error404';

// creating routes, creating an object indicating routes and where they'll be rendered

// const routes = {
//   '/': Home,
//   id will be a dynamic number
//   '/:id': Character,
//   '/contact': 'Contact'
// }

// router manager, will show the elements, will take values from the borwser and see where the user is moving to

// const router = async () => {
//   const header = null || document.getElementById('header');
//   const content = null || document.getElementById('content');

//   header.innerHTML = await Header();
// };

// export default router;

import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
};

export default router;
