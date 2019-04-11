console.log("connected")


// click on card to play
// it is highlighted (click again to deselect)
// click on a game board location to move the card to that spot

function selectCard() {
    targetCard = document.querySelectorAll('.target-card')
    
    targetCard.forEach(function(targetCard){
        targetCard.addEventListener("click", function(){
            console.log(targetCard)
            targetCard.classList.toggle("selected")
        })
    })
}

selectCard()