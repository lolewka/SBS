const burger = document.getElementById("burger");
const nav = document.getElementById("menu");
const close = document.getElementById("close");

burger.addEventListener('click', () => {
    nav.classList.add("active");
})

close.addEventListener('click', () => {
    nav.classList.remove("active");
    burger.classList.remove('active');
})