const serviceButtons = document.querySelectorAll('[data-type="service-btn"]');
const servicesBlock = document.querySelector('.services');


for (const serviceButton of serviceButtons) {
  serviceButton.addEventListener('click', function() {
    const value = serviceButton.dataset.value;

    console.log(value);

    servicesBlock.style.backgroundImage = `url(./images/services/${value}.png)`;
  });
}
