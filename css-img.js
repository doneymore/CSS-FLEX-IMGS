const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e){
console.log(e.propertyName)
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}

panels.forEach(function(pane){
    pane.addEventListener("click", toggleOpen)
});
panels.forEach(function(pan){
    pan.addEventListener("transitionend", toggleActive)
});