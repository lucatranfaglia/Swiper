function resizeText() {
  // let el = document.querySelector('.description-btn');
  let el = document.querySelector('.description-container');
  let desc = document.querySelector('.description');
  let leggi = document.querySelector('.btn-text-leggi');
  let mostra = document.querySelector('.btn-text-mostra');

  el.onclick = function() {
    desc.classList.toggle('text-resized');
    leggi.classList.toggle('hidden');
    mostra.classList.toggle('hidden');
  };
}
  

$(document).ready(function() {
  // Swiper: Slider
  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,      
    slidesPerView: 2,
    spaceBetween: 10,
    paginationClickable: true,
    centeredSlides: true,
    
    fadeEffect: {
      crossFade: true
    },
    
  });
});