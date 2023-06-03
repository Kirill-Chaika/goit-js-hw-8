// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// console.log(galleryItems);


import '../css/01-gallery.css'
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');
const markupGallery = createGallery(galleryItems);




function createGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`;
}).join(''); 
};

  gallery.insertAdjacentHTML('beforeend', markupGallery);
  
  new SimpleLightbox('.gallery a', {
    caption: true,
    captionsData: 'alt',
    captionDelay: 250,
  });