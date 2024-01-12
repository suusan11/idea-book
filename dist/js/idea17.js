"use strict";

var content = document.getElementById('js-content');
var animatedImg = document.getElementById('js-img');
var textSub = document.querySelector('.sub');
var mainSub = document.querySelector('.main');
var tl = gsap.timeline({
  paused: true
});
tl.to(animatedImg, 0.2, {
  x: 0,
  y: 0,
  scale: 0.95,
  opacity: 0.8,
  ease: 'power2.inOut'
}).to(textSub, 0.5, {
  left: '50%',
  xPercent: -50,
  ease: 'power4.easeOut'
}, '<').to(mainSub, 0.5, {
  right: '50%',
  xPercent: 50,
  ease: 'power4.easeOut'
}, '<');
content.addEventListener('mouseover', function () {
  tl.play();
});
content.addEventListener('mouseout', function () {
  tl.reverse();
});