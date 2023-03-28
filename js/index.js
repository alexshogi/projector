// Видео в шапке
const headerVideo = document.getElementById('site-header-video');

headerVideo.load();
headerVideo.play();

// Услуги
const serviceButtons = document.querySelectorAll('[data-type="service-btn"]');
const serviceLists = document.querySelectorAll('[data-type="service-list"]');
const servicesBlock = document.querySelector('.services');

// const firstList = document.querySelector(`[data-type="service-list"][data-value="${1}"]`);
// firstList.style.display = 'unset';

for (const serviceButton of serviceButtons) {
  serviceButton.addEventListener('click', function() {
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
}

//  Кейсы

const modalContainer = document.getElementById('cases-modal-container');
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

  heading.scrollIntoView({
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
