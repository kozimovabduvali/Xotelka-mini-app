const filterBtn = document.querySelector(".filter-btn");
const bgModal = document.querySelector(".bg-modal");
const modalContent = document.querySelector(".modal-content");

// Modalni ochish
filterBtn.addEventListener("click", () => {
  bgModal.classList.remove("hidden");
  bgModal.classList.add("block");

  // CSS transition ishlashi uchun 1 frame kutamiz
  setTimeout(() => {
    modalContent.classList.add("active");
  }, 10);

  document.body.classList.add("overflow-hidden");
});

// Modalni yopish
function closeModal() {
  modalContent.classList.remove("active");
  document.body.classList.remove("overflow-hidden");

  // CSS animatsiya tugashini kutamiz (500ms)
  setTimeout(() => {
    bgModal.classList.remove("block");
    bgModal.classList.add("hidden");
  }, 500);
}

// Modal tashqarisiga bosilganda yopish
document.addEventListener("click", (e) => {
  const isModalOpen = bgModal.classList.contains("block");

  if (
    isModalOpen &&
    !modalContent.contains(e.target) &&
    !filterBtn.contains(e.target)
  ) {
    closeModal();
  }
});
