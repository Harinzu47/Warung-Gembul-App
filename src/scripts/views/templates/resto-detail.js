import CONFIG from '../../global/config';

const restoDetail = (resto) => `
<article class="detail">
<div class="img-container">
  <img alt="${resto.name}" crossorigin="anonymous" src="${CONFIG.BASE_IMG_URL + resto.pictureId}"/>
</div>
<div class="content">
  <h3 class="resto-tittle">${resto.name}</h3>
  <p>${resto.description}</p>
  <p>
    Kota: ${resto.city}
    Alamat: ${resto.address}
  </p>
  <ul>
    <li>Kategori: ${resto.categories.map((category) => category.name).join(', ')}</li>
    <li>Makanan: ${resto.menus.foods.map((food) => food.name).join(', ')}</li>
    <li>Minuman: ${resto.menus.drinks.map((drink) => drink.name).join(', ')}</li>
    <li>Rating:⭐️ ${resto.rating}</li>
  </ul>
  <h4>Ulasan</h4>
<ul class="reviews">
  ${resto.customerReviews.map((review) => `
    <li class="review">
      <div class="review-header">
        <strong>${review.name}</strong>
        <em>${review.date}</em>
      </div>
      <p>${review.review}</p>
    </li>
  `).join('')}
</ul>

</div>

`;

export default restoDetail;
