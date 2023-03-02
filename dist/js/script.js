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
};
/* ----------
IDEA 01
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