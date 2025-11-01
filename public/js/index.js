const filterBtn = document.querySelector(".filter-btn");
const bgModal = document.querySelector(".bg-modal");
const modalContent = document.querySelector(".modal-content");

// Modalni ochish
filterBtn.addEventListener("click", () => {
  // modal ko‘rinadigan holat
  bgModal.classList.remove("hidden");
  bgModal.classList.add("block");

  modalContent.classList.remove("translate-y-full");
  modalContent.classList.add("translate-y-0");

  // sahifa scroll bo‘lmasin
  document.body.classList.add("overflow-hidden");
});

// Modalni yopish funksiyasi
function closeModal() {
  modalContent.classList.remove("translate-y-0");
  modalContent.classList.add("translate-y-full");
  document.body.classList.remove("overflow-hidden");

  // animatsiya tugagach modalni yashirish
  setTimeout(() => {
    bgModal.classList.remove("block");
    bgModal.classList.add("hidden");
  }, 300);
}

// Modal tashqarisiga bosilganda yopish
document.addEventListener("click", (e) => {
  const isModalOpen = bgModal.classList.contains("block");

  // agar modal ochilgan bo‘lsa va bosilgan joy modal-content ichida bo‘lmasa
  if (
    isModalOpen &&
    !modalContent.contains(e.target) &&
    !filterBtn.contains(e.target)
  ) {
    closeModal();
  }
});
