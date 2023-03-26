const serviceButtons = document.querySelectorAll('[data-type="service-btn"]');
const serviceLists = document.querySelectorAll('[data-type="service-list"]');
const servicesBlock = document.querySelector('.services');


for (const serviceButton of serviceButtons) {
  serviceButton.addEventListener('click', function() {
    const value = serviceButton.dataset.value;

    serviceLists.forEach(list => {
      list.style.display = 'none';
    })

    const list = document.querySelector(`[data-type="service-list"][data-value="${value}"]`);

    servicesBlock.style.backgroundImage = `url(./images/services/${value}.png)`;
    list.style.display = 'unset';
  });
}
