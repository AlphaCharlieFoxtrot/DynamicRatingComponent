//first article
const mainConteiner = document.querySelector(".main-conteiner")
//scnd article
const thankYouState = document.querySelector(".thank-you-state")
//submitbtn
const submitButton = document.getElementById("submit")
//rateagainbtn
const rateAgain = document.getElementById("rate-again")
//ratebtn
const rates = document.querySelectorAll(".btn")
//span#rating scnd article
const rating = document.querySelector("#rating")

submitButton.addEventListener("click", () => {
    thankYouState.classList.remove("hidden")
    mainConteiner.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankYouState.classList.add("hidden")
    mainConteiner.style.display = "flex"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})