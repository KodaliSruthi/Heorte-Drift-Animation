const bodyA1 = document.querySelector("body")
bodyA1.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spanA1 = document.createElement("span");
    spanA1.style.left = xPos + "px";
    spanA1.style.top = yPos + "px";
    const size = Math.random()*100;
    spanA1.style.width = size+"px"
    spanA1.style.height = size+"px"
    bodyA1.appendChild(spanA1);
    setTimeout(() => {
        spanA1.remove();
     }, 5000); 
        
    
});