const mySwiper = new Swiper('.swiper-container', {
  loop: true,

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
		el: '.swiper-pagination',
	}
});
