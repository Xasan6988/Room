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


const footerForm = document.querySelector('.footer-form');


// отправка данных из формы
const sendData = (data, cb) => {

  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(cb);
}

// успешная отправка, калбэк
const showThanks = () => {
  alert('You was subscribe');
};



// эвенты


// сабмит формы футера
footerForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(footerForm);
  const data = {};

  for (let [elem, value] of formData) {
    data[elem] = value;
  }

  sendData(data, showThanks)
})
