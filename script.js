const loading = document.querySelector("h4");
const button = document.querySelector("button");
const fillBar = document.querySelectorAll(".fill-bar");

button.addEventListener("click", loader);
button.addEventListener("click", animatebi);

function animatebi() {
  button.style.boxShadow = "0px 3px rgba(125, 0,0, 8)";
  setTimeout(() => {
    button.style.boxShadow = "0px 5px rgba(125, 0,0, 8)";
  }, 100);
}
function loader() {
  for (let index = 0; index < fillBar.length; index++) {
    const element = fillBar[index];
    setTimeout(() => {
      element.style.display = "flex";
    }, index * 1500);
  }
}
