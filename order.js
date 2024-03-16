const contactform = document.querySelector(".contact-form");
const container = document.querySelector(".container");

contactform.addEventListener("submit", (event) => {
  event.preventDefault();
  container.innerHTML =
    "<p>Thank you for choosing our service.</p>";
});

const connectbtn = document.querySelector(".connect-btn");
const crossbtn = document.querySelector(".cross-btn");
const socialcontainer = document.querySelector(".social-container");

connectbtn.addEventListener("click", () => {
  socialcontainer.classList.toggle("visible");
});

crossbtn.addEventListener("click", () => {
  socialcontainer.classList.remove("visible");
});
