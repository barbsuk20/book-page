let keepReading = document.querySelectorAll("#keep-reading");

function openNewTab(event) {
  url = event.currentTarget.getAttribute("data-url");
  window.open(url, "_blank");
}

keepReading.forEach(function (button) {
  button.addEventListener("click", openNewTab);
});

let slideMove = () => {
  let imageList = document.querySelector(".img-list");
  let slideButton = document.querySelectorAll(".slide-button");

  slideButton.forEach((button) => {
    button.addEventListener("click", () => {
      let direction = button.id === "prev-slide" ? -1 : 1;
      let scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};

window.addEventListener("load", slideMove);
