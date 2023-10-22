import 'regenerator-runtime/runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/resto-detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './components/navbar';
import './components/hero';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
