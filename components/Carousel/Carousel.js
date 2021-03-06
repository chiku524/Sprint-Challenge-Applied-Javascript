/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker(){
  const carouselContainer = document.querySelector('.carousel-container');

  const carousel = document.createElement('div');
  const leftButton = document.createElement('button');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('button');

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  carouselContainer.appendChild(carousel);
  carousel.append(leftButton, img1, img2, img3, img4, rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.style.display = 'block';

  carouselImages = [img1, img2, img3, img4];

  let index = 0;

  leftButton.addEventListener('click', CarouselClickLeft);
  rightButton.addEventListener('click', CarouselClickRight);

  function CarouselClickLeft(){
    if(index > 0) {
      carouselImages[index].style.display = 'none';
      index = index - 1;
      carouselImages[index].style.display = 'block';
      unfade();
    } else {
      carouselImages[index].style.display = 'block';
    }
  }
  
  function CarouselClickRight() {
    if (index < 3) {
        carouselImages[index].style.display = 'none';
        index = index + 1;
        carouselImages[index].style.display = 'block';
        unfade();
    }
    else {
        carouselImages[index].style.display = 'block';
    }
  }

  function unfade() {
    var op = 0.1;  // initial opacity
    carouselImages[index].style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        carouselImages[index].style.opacity = op;
        op += op * 0.1;
    }, 10);
  }

}

carouselMaker();
