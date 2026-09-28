const birthdayPerson = "Bhabhi";
const birthdayDate = "8 October 2026";

document.getElementById("dateText").textContent = birthdayDate;
document.getElementById("openBtn").innerHTML = "Open ♥";

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
