import RestoFavoriteIdb from '../../src/scripts/data/favorite-resto-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: RestoFavoriteIdb,
    katalog: {
      restaurant,
    },
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
