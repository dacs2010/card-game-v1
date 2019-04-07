console.log("connected")


// click on card to play
// it is highlighted (click again to deselect)
// click on a game board location to move the card to that spot



function selectCard() {
    document.addEventListener("click", function () {
        console.log(event.srcElement, event.clientX,  event.clientY)

    // highlight the target
    target = document.querySelector(".target")
    if (target.classList.contains("target")) {
        target.classList.toggle("selected")
    }
    // move card to next mouse click location
    if (target.classList.contains("selected")) {
        target.style.top = `${event.clientY}px`
        target.style.left = `${event.clientX}px`
    }

    })
}

selectCard()