
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScoreEl = document.getElementById("guestscore")
let guestScore = 0

function increaseHomeScore(homeup) {
    homeScore += homeup
    homeScoreEl.textContent = homeScore
}


function increaseGuestScore(guestup) {
    guestScore += guestup
    guestScoreEl.textContent = guestScore
}

