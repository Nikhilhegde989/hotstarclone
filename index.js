let movies = [
    {
      name: "falcon and the winter soldier",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil fugit aut delectus, amet quaerat vitae repudiandae sint sequi neque.",
      image: "images/slider 2.png"
    },
  
    {
      name: "Loki",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil fugit aut delectus, amet quaerat vitae repudiandae sint sequi neque.",
      image: "images/slider 1.png"
    },
  
    {
      name: "wanda vision",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil fugit aut delectus, amet quaerat vitae repudiandae sint sequi neque.",
      image: "images/slider 3.png"
    },
  
    {
      name: "raya and the last dragon",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil fugit aut delectus, amet quaerat vitae repudiandae sint sequi neque.",
      image: "images/slider 4.png"
    },
  
    {
      name: "Luca",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nihil fugit aut delectus, amet quaerat vitae repudiandae sint sequi neque.",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector('.carousel');
  let sliders = [];
  
  let sliderIndex = 0;
  
  const createSlide = () => {
    if (sliderIndex >= movies.length) {
      sliderIndex = 0;
    }
  
    // Create elements and append them in the correct order
    let slide = document.createElement('div');
    let content = document.createElement('div');
    let imgElement = document.createElement('img');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[sliderIndex].image;
    sliderIndex++;
  
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
  
    // Set background for the carousel container
    carousel.style.backgroundImage = `url('${movies[sliderIndex].image}')`;
  
    // Clear the background of previous slides
    sliders.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.backgroundImage = 'none';
      }
    });
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  // Video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // Card Sliders
  
  let cardContainers = [...document.querySelectorAll('.card-container')];
  let preBtns = [...document.querySelectorAll('.pre-btn')];
  let nxtBtns = [...document.querySelectorAll('.nxt-btn')];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  
