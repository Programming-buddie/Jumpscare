
const oldbutton = document.querySelector(".loadButton");
const fillBar = document.querySelectorAll(".fill-bar");
const img = document.querySelector("img");
const newButton = document.querySelector(".newButton");

oldbutton.addEventListener("click", loader);
newButton.addEventListener("click", ()=>{
    window.location.href = './index.html'
})
oldbutton.addEventListener("click", animatedButtton);
newButton.addEventListener("click", animatedButtton);

newButton.style.display = "none"
function animatedButtton() {
  oldbutton.style.boxShadow = "0px 3px rgba(125, 0,0, 8)";
  setTimeout(() => {
    oldbutton.style.boxShadow = "0px 5px rgba(125, 0,0, 8)";
  }, 100);
}
function animatedButtton() {
  newButton.style.boxShadow = "0px 3px rgba(125, 0,0, 8)";
  setTimeout(() => {
    newButton.style.boxShadow = "0px 5px rgba(125, 0,0, 8)";
  }, 100);
}
function loader() {
  for (let index = 0; index < fillBar.length; index++) {
    const element = fillBar[index];
    

    setTimeout(() => {
      element.setAttribute("style", "display: flex");
      if (fillBar.item(9).style.display == "flex") {
        img.style.display = "block";
        setTimeout(() => {
            newButton.style.display = "block"
        }, 1700);
      }
    }, index * 300);
  }
}
