const qs = (s) => document.querySelector(s);
const filterBtn = qs(".filter-btn");
const bgModal = qs(".bg-modal");
const modalContent = qs(".modal-content");
const body = document.body;

// Open modal
filterBtn.addEventListener("click", () => {
  toggleModal(true);
});

// Toggle function
function toggleModal(show) {
  bgModal.classList.toggle("hidden", !show);
  bgModal.classList.toggle("block", show);
  body.classList.toggle("overflow-hidden", show);

  requestAnimationFrame(() => {
    modalContent.classList.toggle("active", show);
  });
}

// Close modal
function closeModal() {
  modalContent.classList.remove("active");
  body.classList.remove("overflow-hidden");
}

// Wait for animation to finish
modalContent.addEventListener("transitionend", (e) => {
  if (
    e.propertyName === "transform" &&
    !modalContent.classList.contains("active")
  ) {
    bgModal.classList.add("hidden");
    bgModal.classList.remove("block");
  }
});

// Click outside to close
document.addEventListener("click", (e) => {
  if (
    bgModal.classList.contains("block") &&
    !modalContent.contains(e.target) &&
    !filterBtn.contains(e.target)
  ) {
    closeModal();
  }
});
