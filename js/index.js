// Видео в шапке
const headerVideo = document.getElementById('site-header-video');

headerVideo.load();
headerVideo.play();

// Меню
const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-main');

const headerScroll = document.getElementById('header-scroll');
const burgerScroll = document.getElementById('burger-menu-scroll');
const navScroll = document.getElementById('nav-scroll');

burger.addEventListener('click', function() {
  nav.classList.toggle('hidden');
  burger.classList.toggle('active');
})

burgerScroll.addEventListener('click', function() {
  if (navScroll.classList.contains('hidden')) {
    if (window.innerWidth < 1000) {
      headerScroll.style.height = '280px';
    } else {
      headerScroll.style.height = '100px';
    }
  } else {
    headerScroll.style.height = '30px';
  }
  
  navScroll.classList.toggle('hidden');
  burgerScroll.classList.toggle('active');
})

document.addEventListener('scroll', () => {
  const posY = window.scrollY;

  if (posY > 800) {
    headerScroll.classList.remove('hidden');
  } else {
    headerScroll.classList.add('hidden');
  }
})

// Услуги
const serviceButtons = document.querySelectorAll('[data-type="service-btn"]');
const serviceLists = document.querySelectorAll('[data-type="service-list"]');
const servicesBlock = document.querySelector('.services');

const servicesArr = Array.from(serviceButtons);

let activeElemIndex = 0;
let doRoll = false;

if (window.innerWidth < 1000) {
  doRoll = true;
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1000) {
    doRoll = true;
  } else {
    doRoll = false;
  }
});

const rollServices = () => {
  if (doRoll) {
    if (activeElemIndex === servicesArr.length - 1) {
      activeElemIndex = 0;
    } else {
      activeElemIndex = activeElemIndex + 1;
    }
  
    serviceButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.add('normal');
    })
  
    servicesArr[activeElemIndex].classList.add('active');
  
    const value = servicesArr[activeElemIndex].dataset.value;  
    servicesBlock.style.backgroundImage = `url(./images/services/${value}.png)`;
  }
};

// let serviceInterval = setInterval(() => {
//   rollServices();
// }, 3000);

servicesArr.forEach((serviceButton, index) => {
  serviceButton.addEventListener('click', function() {
    activeElemIndex = index;
    // clearInterval(serviceInterval);

    // serviceInterval = setInterval(() => {
    //   rollServices();
    // }, 3000);

    const value = serviceButton.dataset.value;

    serviceLists.forEach(list => {
      list.style.display = 'none';
    })

    serviceButtons.forEach(btn => {
      btn.classList.remove('active');
    })

    serviceButton.classList.add('active');

    const list = document.querySelector(`[data-type="service-list"][data-value="${value}"]`);

    servicesBlock.style.backgroundImage = `url(./images/services/${value}.png)`;
    list.style.display = 'unset';
  });

  serviceButton.addEventListener('mouseover', function() {
    activeElemIndex = index;
    // clearInterval(serviceInterval);

    // serviceInterval = setInterval(() => {
    //   rollServices();
    // }, 3000);

    const value = serviceButton.dataset.value;

    serviceLists.forEach(list => {
      list.style.display = 'none';
    })

    serviceButtons.forEach(btn => {
      btn.classList.remove('active');
    })

    serviceButton.classList.add('active');

    const list = document.querySelector(`[data-type="service-list"][data-value="${value}"]`);

    servicesBlock.style.backgroundImage = `url(./images/services/${value}.png)`;
    list.style.display = 'unset';
  });
});

//  Кейсы

const modalContainer = document.getElementById('cases-modal-container');
const modal = document.getElementById('modal-initial');
const casesElems = document.querySelectorAll('.case');

const heading = document.getElementById('case-heading');
const modalCloseBtn = document.getElementById('case-modal-close');
const nextCaseBtn = document.getElementById('next-case');
const about = document.getElementById('case-about');
const objective = document.getElementById('case-objective');
const solution = document.getElementById('case-solution');

const image1 = document.getElementById('case-image-1');
const image2 = document.getElementById('case-image-2');
const image3 = document.getElementById('case-image-3');
const image4 = document.getElementById('case-image-4');
const image5 = document.getElementById('case-image-5');
const image6 = document.getElementById('case-image-6');
const image7 = document.getElementById('case-image-7');

modalCloseBtn.addEventListener('click', function() {
  modalContainer.style.display = 'none';
})

let value = 0;

const fillContent = function() {
  const caseInfo = cases.find(c => c.value === `case${value}`);

  heading.innerText = caseInfo.title;
  about.innerText = caseInfo.about;
  objective.innerText = caseInfo.objective;
  solution.innerText = caseInfo.solution;

  image1.src = caseInfo.image1;
  image2.src = caseInfo.image2;
  image3.src = caseInfo.image3;
  image4.src = caseInfo.image4;
  image5.src = caseInfo.image5;
  image6.src = caseInfo.image6;
  image7.src = caseInfo.image7;

  if (value >= 9) {
    nextCaseBtn.style.display = 'none';
  } else {
    nextCaseBtn.style.display = 'block';
  }
}

nextCaseBtn.addEventListener('click', function() {
  value += 1;
  fillContent();

  modal.scrollIntoView({
    behavior: 'smooth'
  });
})

for (const caseElem of casesElems) {
  caseElem.addEventListener('click', function() {
    value = +caseElem.dataset.value;

    fillContent();

    modalContainer.style.display = 'block';
  });
}

// Основное видео

const playBtn = document.getElementById('main-video-btn');
const mainVideo = document.getElementById('main-video');

mainVideo.load();

playBtn.addEventListener('click', function() {
  if (mainVideo.paused) {
    mainVideo.play();
  } else {
    mainVideo.pause();
  }

  playBtn.classList.toggle('stop');
})

const swiperTeam = new Swiper('#swiper-team', {
  loop: true,
  navigation: {
    nextEl: '.team-button-next',
    prevEl: '.team-button-prev',
  },
});
