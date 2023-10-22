import restaurantResource from '../../data/restaurant-source';
import restoItem from '../templates/resto-item';

const Beranda = {
  async render() {
    return `
    <section tabindex="0" class="tentang-kami" id="tentang">
    <article class="img-profile">
    <picture>
    <source media="(max-width:600px)" srcset="./images/logo-warung-small.png">
    <img src="./images/logo-warung-large.png" alt="Hero Image">
    </picture>
    </article>
    <article class="description">
      <h2 class="title">Warung Gembul</h2>
      <p>Di Warung Gembul, kami mengundang Anda untuk merasakan petualangan kuliner yang tak terlupakan. Sebagai restoran yang berdedikasi untuk menyajikan masakan dalam negeri, kami menyuguhkan hidangan-hidangan otentik yang menggugah selera, mengingatkan Anda pada cita rasa klasik yang selalu Anda cintai.</p>
    </article>
  </section>
    <section id="katalog" class="katalog-container">
        <h3 tabindex="0" class="katalog-title">Our Restaurant's</h3>
        <article id="list-katalog"></article>
    </section>
      `;
  },

  async afterRender() {
    const katalog = await restaurantResource.getRestaurantList();
    const listKatalog = document.getElementById('list-katalog');
    console.log(katalog);
    katalog.restaurants.forEach((restaurant) => {
      listKatalog.innerHTML += restoItem(restaurant);
    });
  },
};

export default Beranda;
