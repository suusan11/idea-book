"use strict";

/* ----------
IDEA 12 - 230731 Lenis and GSAP
---------- */
var lenis = new Lenis({
  duration: 1.2,
  easing: function easing(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
  }
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
var section_1 = document.getElementById("js-vertical");
var col_left = document.querySelector(".col_left");
var timeln = gsap.timeline({
  paused: true
}); //読み込んだデフォルト時に止まった状態にする

ScrollTrigger.matchMedia({
  "(min-width: 481px)": function minWidth481px() {
    timeln.fromTo(col_left, {
      y: 0
    }, {
      y: '170vh',
      duration: 1,
      ease: 'none'
    }, 0);
  },
  "(max-width: 480px)": function maxWidth480px() {
    timeln.fromTo(col_left, {
      y: 0
    }, {
      y: 0,
      duration: 1,
      ease: 'none'
    }, 0);
  }
});
var scroll_1 = ScrollTrigger.create({
  animation: timeln,
  //発火させるアニメーションの指定
  trigger: section_1,
  start: 'top top',
  end: 'bottom center',
  scrub: true
});
var section_2 = document.getElementById("js-horizontal");
var box_items = gsap.utils.toArray(".horizontal__item");

if (section_2 !== null) {
  ScrollTrigger.matchMedia({
    "(min-width: 481px)": function minWidth481px() {
      gsap.to(box_items, {
        xPercent: -100 * (box_items.length - 1),
        ease: "sine.out",
        scrollTrigger: {
          trigger: section_2,
          pin: true,
          scrub: true,
          snap: 1 / (box_items.length - 1),
          end: "+=" + section_2.offsetWidth //横スクロールだからコンテントの横幅が終わり値になる

        }
      });
    },
    "(max-width: 480px)": function maxWidth480px() {
      gsap.to(box_items, {
        xPercent: -115 * (box_items.length - 1),
        ease: "sine.out",
        scrollTrigger: {
          trigger: section_2,
          pin: true,
          scrub: true,
          snap: 1 / (box_items.length - 1),
          end: "+=" + section_2.offsetWidth //横スクロールだからコンテントの横幅が終わり値になる

        }
      });
    }
  });
}