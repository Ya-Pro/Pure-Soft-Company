let item = document.querySelectorAll(".nav-list li");
item.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    item.addEventListener("click", () => {
      item.classList.contains("active")
        ? item.classList.remove("active")
        : item.classList.add("active");
    });
  });
});

let image = document.querySelector(".random img");
console.log(image.src);
let arrayImages = ["1.jpg", "3.jpg", "4.png"];
let randomImgs = (image, arrayImages) => {
  let random = Math.floor(Math.random() * arrayImages.length);
  image.src = arrayImages[random];
};
window.addEventListener("load", randomImgs(image, arrayImages));
//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
let hiddenelements = document.querySelectorAll(".hidden");
hiddenelements.forEach((el) => observer.observe(el));
// the cookie system
let cookie = document.querySelector(".cookie");
let btns = document.querySelectorAll(".btns button");
const cookiedrop = () => {
  // ? if document contains sharif-tarek then return and don't complete the code under this condition
  if (document.cookie.includes("sharif-tarek")) return;
  cookie.classList.add("sCookie");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cookie.classList.remove("sCookie");
      if (btn.id == "accept") {
        document.cookie =
          "cookiecontent=sharif-tarek; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener("load", cookiedrop);
// ---------------------------------------------------------------------cookie system end
// the hand button up beginning
let button = document.querySelector(".hand ");
window.onscroll = () => {
  if (window.scrollY >= 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
