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
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,

        fadeEffect: {
            crossFade: true
        },
    });
});