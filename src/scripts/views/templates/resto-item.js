import CONFIG from '../../global/config';

const restoItem = (resto) => `
<div tabindex="0" class="card-resto">
<a href="#/resto/${resto.id}" class="card-a">
 <img tabindex="0" class="image lazyload" alt="${resto.name}" data-src="${CONFIG.BASE_IMG_URL + resto.pictureId}"/>
 <span class="rating">
   <p>⭐️<span>Rating: ${resto.rating}</span></p>
 </span>
 <div tabindex="0" class="card-content">
   <p class="card-content-title">${resto.name} - ${resto.city}</p>
   <p class="content-description">${resto.description}</p>
 </div>
 </a>
 </div>
 `;

export default restoItem;
