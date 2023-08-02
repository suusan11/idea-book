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

/* ----------
IDEA 01 - hover
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


/* ----------
IDEA 04 - 230313 dialog
---------- */
// Open modal
const modals = document.querySelectorAll('.js-modal');
let modalData;
let targetModal;
let html = document.documentElement;
const openModal = (el) => {
    modals.forEach(modal => {
        modalData = modal.getAttribute('data-class');
        if(el.className === modalData) {
            targetModal = modal;
            console.log(targetModal);
        }
    })
    targetModal.setAttribute('open', '');
    html.classList.add('is__locked');
}
// Close modal
function closeModal(e) {
    let target = e.target;
    let parentModal = target.closest("#modal");
    parentModal.removeAttribute('open');
    html.classList.remove('is__locked');
}

/* ----------
IDEA 06 - 230315 dark mode
---------- */
const checkbox = document.getElementById('toggle');
const modeArea = document.getElementById('js-idea6');
if(checkbox !== null) {
    checkbox.addEventListener('click', () => {
        const title = document.getElementById('mode');
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
const target2 = document.getElementById('js-gradient');
if(target2 !== null) {
    const options2 = {
        threshold: buildThresholdList()
    };
    let observer2 = new IntersectionObserver(showElements, options2);
    observer2.observe(target2);
    
    // threshold の設定
    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;
    
        for (let i = 1; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }
        return thresholds;
    }
    
    function showElements(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let ratio = Math.round(entry.intersectionRatio * 100);
                target2.style.backgroundImage = `
                    linear-gradient(
                    45deg,
                    rgb(37, 47, 255) ${0 - ratio}%,
                    rgb(124, 192, 226) ${100 - ratio}%,
                    rgb(37, 47, 255) ${200 - ratio}%
                )`;
            }
        })
    }
}

/* ----------
IDEA 09 - 230320 hover
---------- */
const mouseTargets = document.querySelectorAll('.js-mouse-item');
if(mouseTargets !== null) {
    mouseTargets.forEach(target => {
        target.addEventListener('mousemove', (e) => {
            const pointerX = target.clientWidth - e.offsetX * 2;
            const pointerY = target.clientHeight - e.offsetY * 2;
            let x = -pointerX / 30;
            let y = pointerY / 25;
            target.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(1.05)`;
            console.log(`rotateX(${x}deg)`);
            console.log(`rotateY(${y}deg)`);
        }, false)
        target.addEventListener('mouseleave', () => {
            mouseTargets.forEach(target => {
                target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)";
            })
        })
    })
}

const words = document.querySelectorAll('.blink .word');
for(let i = 0; i < words.length; i++) {
    const delayTime = Math.random() * 0.1;
    words[i].style.animationDelay = `${delayTime}s`
}

/* ----------
IDEA 11 - 230323 scroll image
---------- */
const kurukuru = document.getElementById('js-kurukuru');
if(kurukuru !== null) {
    const optionsKurukuru = {
        root: null,
        rootMargin: '50% 0px -50% 0px',
        threshold: buildThresholdList()
    };
    let observerKurukuru = new IntersectionObserver(imageKurukuru, optionsKurukuru);
    observerKurukuru.observe(kurukuru);
    
    // threshold の設定
    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 100;
    
        for (let i = 1; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }
        return thresholds;
    }
    
    function imageKurukuru(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let ratio = Math.round(entry.intersectionRatio * 100);
                kurukuru.style.transform = `rotate(${ratio}deg)`;
                console.log(ratio);
            }
        })
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