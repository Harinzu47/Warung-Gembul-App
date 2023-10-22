import restaurantResource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import restoDetail from '../templates/resto-detail';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import RestoFavoriteIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <h2 class="detail-tittle">Detail Restaurant</h2>
      <section id="detail-restaurant"></section>
      <div id="likeButtonContainer"></div>

        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const katalog = await restaurantResource.getRestaurantDetail(url.id);
    const restaurantContainer = document.getElementById('detail-restaurant');
    restaurantContainer.innerHTML += restoDetail(katalog.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: RestoFavoriteIdb,
      katalog,
    });
  },
};

export default Detail;
