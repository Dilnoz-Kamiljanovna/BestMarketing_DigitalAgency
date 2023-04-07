const contactUs = document.querySelector(".header-top__btn")
const modalWindow = document.querySelector(".form")

contactUs.addEventListener("click", ()=>{
    modalWindow.classList.add("open")
})
