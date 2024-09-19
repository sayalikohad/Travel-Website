const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click",() => {
    menu.classList.add("active");
    gsap.from(".menu" , {
        opacity: 0,
        duration:.3
    })
})

close.addEventListener("click",() => {
    menu.classList.add("active");
})