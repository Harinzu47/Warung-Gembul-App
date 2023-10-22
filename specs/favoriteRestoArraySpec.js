/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favRestos = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favRestos.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favRestos.push(resto);
  },

  deleteResto(id) {
    favRestos = favRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite resto array contract test', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => (favRestos = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
