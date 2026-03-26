  const toggler = document.querySelector(".navbar-toggler");

  toggler.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  // View More
  document.getElementById("viewMoreBtn").onclick = function () {
    document.getElementById("fullGallery").classList.remove("d-none");
    this.style.display = "none";
  };

  // Show Less
  document.getElementById("showLessBtn").onclick = function () {
    document.getElementById("fullGallery").classList.add("d-none");
    document.getElementById("viewMoreBtn").style.display = "inline-block";
    window.scrollTo({
      top: document.getElementById("gallery").offsetTop - 50,
      behavior: "smooth"
    });
  };

  // Image Click → Modal
  document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function () {
      document.getElementById("modalImage").src = this.src;
      document.getElementById("modalTitle").innerText = this.dataset.title;
      document.getElementById("modalDate").innerText = this.dataset.date;

      let modal = new bootstrap.Modal(document.getElementById("galleryModal"));
      modal.show();
    });
  });
