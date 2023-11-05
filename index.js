

function myfunction() {
    document.querySelector(".inner").classList.toggle("shows");

}

const Hamburger = document.querySelector(".pics");
const dropDown = document.querySelector(".Drop-down");

Hamburger.addEventListener("click", function(){
    dropDown.classList.toggle("dropnav")
})



