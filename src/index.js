import router from './routes';

window.addEventListener('load', router);
// generate a new event that listen the routes / hashes
window.addEventListener('hashchange', router);