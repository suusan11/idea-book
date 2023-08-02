"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Add target and rel to external links
var domain = document.domain;
var regexp = new RegExp(domain);
var links = document.getElementsByTagName('a');

var _iterator = _createForOfIteratorHelper(links),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var link = _step.value;

    if (!regexp.test(link.href)) {
      if (link.href.match(/^https:\/\//) || link.href.match(/^http:\/\//)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
      }
    } else if (link.href.match(/\.pdf/)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  } // Open global menu

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var menuBtn = document.getElementById('js-menu-toggle');
var gnav = document.getElementById('js-global-menu');
var body = document.querySelector('body');
var scrollValue;
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('open');
  gnav.classList.toggle('open');
  body.classList.toggle('open');

  if (body.classList.contains('open')) {
    scrollValue = window.pageYOffset;
    body.style.top = -scrollValue + 'px';
  } else {
    body.style.removeProperty('top');
    window.scrollTo(0, scrollValue);
  }
}); // Internal link

var menus = document.querySelectorAll('.global__menu > ul > li > a');
menus.forEach(function (menu) {
  menu.addEventListener('click', function () {
    if (body.classList.contains('open')) {
      body.classList.remove('open');
      gnav.classList.remove('open');
    }
  });
}); // Adjust link position

window.onload = function () {
  if (window.location.hash == "") {
    return;
  }

  document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
}; // Intersection Observer


var targets = document.querySelectorAll('.js-target');
var options = {
  root: null,
  rootMargin: '-30% 0px',
  threshold: 0
};
var observer = new IntersectionObserver(setIntersection, options);
targets.forEach(function (target) {
  observer.observe(target);
});

function setIntersection(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is__active');
    }
  });
}
/* ----------
IDEA 01 - hover
---------- */


var target = document.querySelectorAll(".item__wrap");

function setDiagonalDistance(t) {
  for (var i = 0; i < t.length; i++) {
    var pw = Math.pow(t[i].offsetWidth, 2);
    var ph = Math.pow(t[i].offsetHeight, 2);
    t[i].style.setProperty("--scale", Math.sqrt(pw + ph));
  }
}

var idea1 = document.getElementById('js-idea1');
window.addEventListener("resize", function () {
  if (idea1 !== null) {
    setDiagonalDistance(target);
  }
}, {
  passive: true
});
document.addEventListener("DOMContentLoaded", function () {
  if (idea1 !== null) {
    setDiagonalDistance(target);
  }
}, false);
/* ----------
IDEA 04 - 230313 dialog
---------- */
// Open modal

var modals = document.querySelectorAll('.js-modal');
var modalData;
var targetModal;
var html = document.documentElement;

var openModal = function openModal(el) {
  modals.forEach(function (modal) {
    modalData = modal.getAttribute('data-class');

    if (el.className === modalData) {
      targetModal = modal;
      console.log(targetModal);
    }
  });
  targetModal.setAttribute('open', '');
  html.classList.add('is__locked');
}; // Close modal


function closeModal(e) {
  var target = e.target;
  var parentModal = target.closest("#modal");
  parentModal.removeAttribute('open');
  html.classList.remove('is__locked');
}
/* ----------
IDEA 06 - 230315 dark mode
---------- */


var checkbox = document.getElementById('toggle');
var modeArea = document.getElementById('js-idea6');

if (checkbox !== null) {
  checkbox.addEventListener('click', function () {
    var title = document.getElementById('mode');
    title.innerHTML = checkbox.checked ? 'ON 🌝' : 'OFF 🌞';

    if (checkbox.checked) {
      // ダークモード
      modeArea.classList.remove("light-theme");
      modeArea.classList.add("dark-theme");
    } else {
      // ライトモード
      modeArea.classList.remove("dark-theme");
      modeArea.classList.add("light-theme");
    }
  });
}
/* ----------
IDEA 08 - 230317 scroll-text2
---------- */


var target2 = document.getElementById('js-gradient');

if (target2 !== null) {
  var options2 = {
    threshold: buildThresholdList()
  };
  var observer2 = new IntersectionObserver(showElements, options2);
  observer2.observe(target2); // threshold の設定

  function buildThresholdList() {
    var thresholds = [];
    var numSteps = 20;

    for (var i = 1; i <= numSteps; i++) {
      var ratio = i / numSteps;
      thresholds.push(ratio);
    }

    return thresholds;
  }

  function showElements(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var ratio = Math.round(entry.intersectionRatio * 100);
        target2.style.backgroundImage = "\n                    linear-gradient(\n                    45deg,\n                    rgb(37, 47, 255) ".concat(0 - ratio, "%,\n                    rgb(124, 192, 226) ").concat(100 - ratio, "%,\n                    rgb(37, 47, 255) ").concat(200 - ratio, "%\n                )");
      }
    });
  }
}
/* ----------
IDEA 09 - 230320 hover
---------- */


var mouseTargets = document.querySelectorAll('.js-mouse-item');

if (mouseTargets !== null) {
  mouseTargets.forEach(function (target) {
    target.addEventListener('mousemove', function (e) {
      var pointerX = target.clientWidth - e.offsetX * 2;
      var pointerY = target.clientHeight - e.offsetY * 2;
      var x = -pointerX / 30;
      var y = pointerY / 25;
      target.style.transform = "perspective(1000px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(1.05)");
      console.log("rotateX(".concat(x, "deg)"));
      console.log("rotateY(".concat(y, "deg)"));
    }, false);
    target.addEventListener('mouseleave', function () {
      mouseTargets.forEach(function (target) {
        target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)";
      });
    });
  });
}

var words = document.querySelectorAll('.blink .word');

for (var i = 0; i < words.length; i++) {
  var delayTime = Math.random() * 0.1;
  words[i].style.animationDelay = "".concat(delayTime, "s");
}
/* ----------
IDEA 11 - 230323 scroll image
---------- */


var kurukuru = document.getElementById('js-kurukuru');

if (kurukuru !== null) {
  var optionsKurukuru = {
    root: null,
    rootMargin: '50% 0px -50% 0px',
    threshold: buildThresholdList()
  };
  var observerKurukuru = new IntersectionObserver(imageKurukuru, optionsKurukuru);
  observerKurukuru.observe(kurukuru); // threshold の設定

  function buildThresholdList() {
    var thresholds = [];
    var numSteps = 100;

    for (var _i = 1; _i <= numSteps; _i++) {
      var ratio = _i / numSteps;
      thresholds.push(ratio);
    }

    return thresholds;
  }

  function imageKurukuru(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var ratio = Math.round(entry.intersectionRatio * 100);
        kurukuru.style.transform = "rotate(".concat(ratio, "deg)");
        console.log(ratio);
      }
    });
  }
}
/* ----------
IDEA 12 - 230731 Lenis and GSAP
---------- */
// const lenis = new Lenis({
//     duration: 1.2,
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// });
// function raf(time) {
//     lenis.raf(time);
//     ScrollTrigger.update();
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);
// const section_1 = document.getElementById("js-vertical");
// const col_left = document.querySelector(".col_left");
// const timeln = gsap.timeline({ paused: true }); //読み込んだデフォルト時に止まった状態にする
// ScrollTrigger.matchMedia({
//     "(min-width: 481px)": function () {
//         timeln.fromTo(col_left, {y: 0}, {y: '170vh', duration: 1, ease: 'none'}, 0);
//     },
//     "(max-width: 480px)": function () {
//         timeln.fromTo(col_left, {y: 0}, {y: 0, duration: 1, ease: 'none'}, 0);
//     },
// })
// const scroll_1 = ScrollTrigger.create({
//     animation: timeln, //発火させるアニメーションの指定
//     trigger: section_1,
//     start: 'top top',
//     end: 'bottom center',
//     scrub: true,
// });
// const section_2 = document.getElementById("js-horizontal");
// let box_items = gsap.utils.toArray(".horizontal__item");
// if(section_2 !== null) {
//     ScrollTrigger.matchMedia({
//         "(min-width: 481px)": function () {
//             gsap.to(box_items, {
//                 xPercent: -100 * (box_items.length - 1),
//                 ease: "sine.out",
//                 scrollTrigger: {
//                     trigger: section_2,
//                     pin: true,
//                     scrub: 3,
//                     snap: 1 / (box_items.length - 1),
//                     end: "+=" + section_2.offsetWidth, //横スクロールだからコンテントの横幅が終わり値になる
//                 }
//             });
//         },
//         "(max-width: 480px)": function () {
//             gsap.to(box_items, {
//                 xPercent: -115 * (box_items.length - 1),
//                 ease: "sine.out",
//                 scrollTrigger: {
//                     trigger: section_2,
//                     pin: true,
//                     scrub: 3,
//                     snap: 1 / (box_items.length - 1),
//                     end: "+=" + section_2.offsetWidth, //横スクロールだからコンテントの横幅が終わり値になる
//                 }
//             });
//         },
//     })
// }