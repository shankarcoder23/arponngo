
const itemsPerPage = 3;
const items = document.querySelectorAll('.gallery-item');
const pagination = document.getElementById('pagination');

let currentPage = 1;

// Show items
function showPage(page) {
  currentPage = page;

  items.forEach((item, index) => {
    item.style.display = "none";

    if (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) {
      item.style.display = "block";
    }
  });

  renderPagination();
}

// Create pagination
function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Previous button
  let prev = document.createElement("li");
  prev.className = "page-item " + (currentPage === 1 ? "disabled" : "");
  prev.innerHTML = `<a class="page-link" href="#">«</a>`;
  prev.onclick = () => showPage(currentPage - 1);
  pagination.appendChild(prev);

  // Numbers
  for (let i = 1; i <= totalPages; i++) {
    let li = document.createElement("li");
    li.className = "page-item " + (i === currentPage ? "active" : "");
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = () => showPage(i);
    pagination.appendChild(li);
  }

  // Next button
  let next = document.createElement("li");
  next.className = "page-item " + (currentPage === totalPages ? "disabled" : "");
  next.innerHTML = `<a class="page-link" href="#">»</a>`;
  next.onclick = () => showPage(currentPage + 1);
  pagination.appendChild(next);
}

// Init
showPage(1);

// Modal Preview
document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('modalImage').src = this.src;
    document.getElementById('modalTitle').innerText = this.dataset.title;
    document.getElementById('modalDate').innerText = "Date: " + this.dataset.date;

    new bootstrap.Modal(document.getElementById('galleryModal')).show();
  });
});
