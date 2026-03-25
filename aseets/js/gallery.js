
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const fullGallery = document.getElementById("fullGallerySection");

  // Show Full Gallery
  viewMoreBtn.addEventListener("click", function () {
    fullGallery.classList.remove("d-none");

    // Smooth scroll to gallery
    fullGallery.scrollIntoView({ behavior: "smooth" });

    // Hide View More button
    document.getElementById("viewMoreWrapper").style.display = "none";
  });

  // Hide Full Gallery
  showLessBtn.addEventListener("click", function () {
    fullGallery.classList.add("d-none");

    // Scroll back to carousel
    document.getElementById("galleryCarousel").scrollIntoView({ behavior: "smooth" });

    // Show View More button again
    document.getElementById("viewMoreWrapper").style.display = "block";
  });
