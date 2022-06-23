const slide1 = document.querySelector('section');
const slide2 = document.querySelector('section');
const slide3 = document.querySelector('section');
const slide4 = document.querySelector('section');
const slide5 = document.querySelector('section');
const circle1 = document.querySelector('section');
const circle2 = document.querySelector('section');
const circle3 = document.querySelector('section');
const circle4 = document.querySelector('section');
const circle5 = document.querySelector('section');

const handleHover = function (e) {
  console.log(this);
  console.log(this === window);
};
handleHover();

//  function clickCircle() {
//      if (e.target)
//  }

function update() {
  const container = document.getElementById('controls');
  const elem = document.getElementById('example');
  const rect = elem.getBoundingClientRect();

  for (let key in rect) {
    console.log(`${key} : ${rect[key]}`);
  }

  console.log(window.pageXOffset, window.pageYOffset);
  if (rect.width > 600) {
    slide1.innerHTML = 'Yeeeeeeet!!!!';
  } else if (rect.width <= 600) {
    slide1.innerHTML = 'You weak asf';
  }

  container.innerHTML = '';
  for (let key in rect) {
    if (typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent = `${key} : ${rect[key]}`;
      container.appendChild(para);
    }
  }
}

document.addEventListener('scroll', update);
update();
