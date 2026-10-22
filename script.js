const loading = document.querySelector("h4")

const fillBar = document.querySelectorAll(".fill-bar")


for (let index = 0; index < fillBar.length; index++) {
        const element = fillBar[index];
        setTimeout(() => {
            element.style.display = "flex"
            
        }, index*1500);
        
        setTimeout(() => {
            // document.body.style.opacity = index/0.04+"%"
            console.log(index/0.04+"%")
        }, index*1500);
    }
