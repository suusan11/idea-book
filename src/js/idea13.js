/* ----------
IDEA 13 - 230802 Lenis and GSAP2
---------- */
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery',
        scrub: true,
    }
})
.to('.idea13__img', {
    y: -700,
    stagger: 0.2
})