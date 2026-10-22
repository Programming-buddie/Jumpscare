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

  if (fillBar.item(4).style.display == "flex"){
    fillBar.forEach((fill)=>{
        fill.style.display="none"
    })
  }
}
function loader() {
  for (let index = 0; index < fillBar.length; index++) {
    const element = fillBar[index];
    setTimeout(() => {
      element.setAttribute("style", "display: flex")
      if (fillBar.item(4).style.display == "flex"){
        console.log("active")
      }
    }, index * 1500);
    
  }
  
}
