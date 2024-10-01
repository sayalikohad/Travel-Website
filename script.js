const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click",() => {
    menu.classList.add("active");
    gsap.from(".menu" , {
        opacity: 0,
        duration:.3
    })
    gsap.from(".menu ul" , {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click",() => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector , {
            y: 30, 
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger : {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelectors) => {
        timeline.to(boxSelectors, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });
    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}





animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search "]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .heading",]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinatons", [".destinatons .heading", ".destinatons .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinatons .gallery", [".destinatons .gallery .box1", ".destinatons .gallery .box2", ".destinatons .gallery .box3", ".destinatons .gallery .box4", ".destinatons .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1", ".featured .gallery .box2", ".featured .gallery .box3", ".featured.gallery .box4"])

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);