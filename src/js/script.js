// Add target and rel to external links
const domain = document.domain;
const regexp = new RegExp(domain);
const links = document.getElementsByTagName('a');
for(let link of links) {
    if(!regexp.test(link.href)) {
        if(link.href.match(/^https:\/\//) || link.href.match(/^http:\/\//)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener');
        }
    }else if(link.href.match(/\.pdf/)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener');
    }
}

// Open global menu
const menuBtn = document.getElementById('js-menu-toggle');
const gnav = document.getElementById('js-global-menu');
const body = document.querySelector('body');
let scrollValue;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    gnav.classList.toggle('open');
    body.classList.toggle('open');
    if(body.classList.contains('open')) {
        scrollValue = window.pageYOffset;
        body.style.top = -scrollValue + 'px';
    }else {
        body.style.removeProperty('top');
        window.scrollTo(0, scrollValue);
    }
});

// Internal link
const menus = document.querySelectorAll('.global__menu > ul > li > a');
menus.forEach(menu => {
    menu.addEventListener('click', () => {
        if(body.classList.contains('open')) {
            body.classList.remove('open');
            gnav.classList.remove('open');
        }
    })
});

// Adjust link position
window.onload = () => {
    if(window.location.hash == "") {
        return;
    }
    document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
}

/* ----------
IDEA 01
---------- */
let target = document.querySelectorAll(".item__wrap");
function setDiagonalDistance(t) {
    for (let i = 0; i < t.length; i++) {
        let pw = Math.pow(t[i].offsetWidth, 2);
        let ph = Math.pow(t[i].offsetHeight, 2);
        t[i].style.setProperty("--scale", Math.sqrt(pw + ph));
    }
}

const idea1 = document.getElementById('js-idea1');
window.addEventListener("resize", function() {
    if(idea1 !== null) {
        setDiagonalDistance(target);
    }
}, {passive: true});

document.addEventListener("DOMContentLoaded", function() {
    if(idea1 !== null) {
        setDiagonalDistance(target);
    }
}, false);

// Intersection Observer
const targets = document.querySelectorAll('.js-target');
const options = {
    root: null,
    rootMargin: '-30% 0px',
    threshold: 0
};
let observer = new IntersectionObserver(setIntersection, options);
targets.forEach(target => {
    observer.observe(target);
});
function setIntersection(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is__active');
        }
    })
}
