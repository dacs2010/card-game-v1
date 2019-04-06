console.log("connected")

function moveTarget(){
    let target = document.querySelector("#target-1")


    document.addEventListener("mousedown", function(){
        // console.log(event)
        console.log(event.srcElement.id)
        target.style.top = event.offsetY - 50 + "px"
        target.style.left = event.offsetX - 50 + "px"
    })
}

moveTarget()