document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", function () {
    let text = this.previousElementSibling;

    text.classList.toggle("expanded");

    if (text.classList.contains("expanded")) {
      this.innerText = "Show Less ←";
    } else {
      this.innerText = "Read More →";
    }
  });
});