import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const modal = basicLightbox.create('<img src="" alt="">');

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `)
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  const clickedImage = event.target.closest('.gallery__image');
  if (clickedImage) {
    const largeImageUrl = clickedImage.dataset.source;
    modal.element().querySelector('img').src = largeImageUrl;
    modal.show();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.close();
  }
});
