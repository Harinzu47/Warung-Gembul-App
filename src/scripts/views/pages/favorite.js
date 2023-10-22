import RestoFavoriteIdb from '../../data/favorite-resto-idb';
import restoItem from '../templates/resto-item';

const Favorite = {
  async render() {
    return `
      <h2>Favorite Page</h2>
      <section id="favoriteResto"></section>
        `;
  },

  async afterRender() {
    const restaurants = await RestoFavoriteIdb.getAllResto();
    const favoriteRestoContainer = document.getElementById('favoriteResto');

    if (restaurants.length === 0) {
      favoriteRestoContainer.innerHTML = `
      Favorite Movie Not Found
      `;
    }

    restaurants.forEach((resto) => {
      favoriteRestoContainer.innerHTML += restoItem(resto);
    });
  },
};

export default Favorite;
