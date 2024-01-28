const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    // this.parentNode
    //   .querySelector(".info-dot__circle")
    //   .classList.toggle("info-dot_circle--active");
    // this.parentNode
    //   .querySelector(".info-dot__radius")
    //   .classList.toggle("info-dot_radius--active");
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

document.addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
