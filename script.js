const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav")
const body = document.body

const openMenu = () => {
    menuBtn.classList.toggle("close")
    nav.classList.toggle("open")
    body.classList.toggle("lock")
}