const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to(".page1", {
    y:"100vh",
    scale: 0.5,
    duration: 0
})

tl.to(".page1", {
    y: "0vh",
    duration: 1,
    delay: 1
})

tl.to(".page1", {
    y:"0vh",
    scale: 1,
    rotate: -360,
    duration:1,
    ease: Power1
})