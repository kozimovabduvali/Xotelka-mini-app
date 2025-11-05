// Short query helper
const qs = (s) => document.querySelector(s);

// Elements
const filterBtn = qs(".filter-btn");
const bgModal = qs(".bg-modal");
const modalContent = qs(".modal-content");
const body = document.body;

// Open modal
filterBtn.addEventListener("click", () => toggleModal(true));

// Toggle modal visibility
function toggleModal(show) {
  bgModal.classList.toggle("hidden", !show);
  bgModal.classList.toggle("block", show);
  body.classList.toggle("overflow-hidden", show);

  // Wait one frame for transition trigger
  requestAnimationFrame(() => {
    modalContent.classList.toggle("active", show);
  });
}

// Close modal
function closeModal() {
  modalContent.classList.remove("active");
  body.classList.remove("overflow-hidden");
}

// Wait for transition end to fully hide
modalContent.addEventListener("transitionend", (e) => {
  if (
    e.propertyName === "transform" &&
    !modalContent.classList.contains("active")
  ) {
    bgModal.classList.add("hidden");
    bgModal.classList.remove("block");
  }
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (
    bgModal.classList.contains("block") &&
    !modalContent.contains(e.target) &&
    !filterBtn.contains(e.target)
  ) {
    closeModal();
  }
});

// Close when clicking any button or link inside modal
modalContent.addEventListener("click", (e) => {
  const target = e.target.closest("button, a");
  if (target) {
    closeModal();
  }
});
