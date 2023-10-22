import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import RestoFavIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestoFavIdb.getAllResto()).forEach(async (resto) => {
      await RestoFavIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(RestoFavIdb);
});
