  const toggler = document.querySelector(".navbar-toggler");

  toggler.addEventListener("click", function () {
    this.classList.toggle("active");
  });
const images = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

images.forEach(img => {
  img.addEventListener("click", function () {

    modalImage.src = this.src;

    let title = this.getAttribute("data-title");
    let date = this.getAttribute("data-date");

    modalCaption.innerHTML = `<strong>${title}</strong><br>${date}`;

    let modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
  });
});