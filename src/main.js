// 'use-strict';

import footerComponent from './components/footer/footer.controller.js';
import navComponent from './components/nav/nav.controller.js';
import { routes } from './routes.js';

navComponent();
footerComponent();

document.addEventListener('click', (event) => {
  if (!event.target.href) {
    return;
  }

  event.preventDefault();

  console.log(event);

  urlRoute(event);

  // setRoute(event.target.pathname);
});

const urlRoute = (event) => {
  event = event || window.event;

  event.preventDefault();

  window.history.pushState({}, '', event.target.href);

  setRoute();
};

const setRoute = async () => {
  const route = window.location.pathname ?? '/';
  const [filtrado] = routes.filter((r) => r.path === route);

  document.title = filtrado.title;

  const html = await fetch(filtrado.component).then((resp) => resp.text());

  document.getElementById('root').innerHTML = html;
};

window.onpopstate = setRoute;

window.route = urlRoute;

setRoute();
