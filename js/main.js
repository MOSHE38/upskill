const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelectorAll(".menu-btn");
const navMenu = document.querySelector(".menu");

window.addEventListener("scroll", function() {
    if (scrollY > 20) {
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");
    }
})

menuBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    })
})
