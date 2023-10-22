import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like-button';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteResto, katalog }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = katalog.restaurant;
    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurant = await this._favoriteResto.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
