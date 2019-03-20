console.log("connected")

function moveTarget(){
    let target = document.querySelector("#target-1")


    document.addEventListener("mousedown", function(){
        console.log(event.offsetX)
        console.log(event.offsetY)
        target.style.top = event.offsetY + "px"
        target.style.left = event.offsetX + "px"
    })
}

moveTarget()