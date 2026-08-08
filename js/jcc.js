let selector = (element) => document.querySelector(element);
let herobtn = selector("#hero-btn");
let allbtn = selector("#all");
herobtn.addEventListener("click", () => {
  alert("Welcome to JCC. \n Start Your Journey!");
});
allbtn.addEventListener("click", () => {});

function filter(type, btn) {
  document
    .querySelectorAll(".filter-buttons button")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll("#courseGrid .card").forEach((card) => {
    card.style.display =
      type == "all" || card.classList.contains(type) ? "block" : "none";
  });
}

let sendbtn = selector("#sendbtn");
sendbtn.addEventListener("click", () => {
  alert("your  message is  successfully send,  we will get back to you n soon");
});
