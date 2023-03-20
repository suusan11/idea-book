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


/* ----------
IDEA 04
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
            console.log
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
IDEA 06
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
IDEA 08
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
IDEA 09
---------- */
const mouseTargets = document.querySelectorAll('.js-mouse-item');
// if(mouseTargets !== null) {
//     //ポインターの位置、座標
//     let pointerX = 0;
//     let pointerY = 0;
//     let x = 0;
//     let y = 0;

//     //最小値、最大値
//     const minmax = (num) => {
//         return Math.min( 0.5, Math.max(-0.5,num)); //-0.5以上0.5以下
//     }

//     const coordinate = () => {
//         //表示場所の位置
//         mouseTargets.forEach(target => {
//             const wrapReact = target.getBoundingClientRect();
//             // console.log(wrapReact);
//             //ポインターが表示場所のどの位置にあるか。中心を(0,0)とする為に0.5引く
//             x = (pointerX - wrapReact.left) / wrapReact.width - 0.5;
//             y = (pointerY - wrapReact.top) / wrapReact.height - 0.5;
//             //最小値、最大値の確認（touchイベント用）
//             x = minmax(x);
//             y = minmax(y);
//         })
//     }

//     mouseTargets.forEach(target => {
//         target.addEventListener('mousemove', e => {
//             pointerX = e.clientX;
//             pointerY = e.clientY;
//             coordinate();
//             target.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
//         })

//     })
// }
if(mouseTargets !== null) {
    mouseTargets.forEach(target => {
        target.addEventListener('mousemove', (e) => {
            const pointerX = target.clientWidth - e.clientX * 2;
            const pointerY = target.clientHeight - e.clientY * 2;
            const x = -pointerX / 30;
            const y = pointerY / 24;
            target.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale3d(1, 1, 1)`;
        }, false)
        target.addEventListener('mouseleave', () => {
            mouseTargets.forEach(target => {
                target.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            })
        })
    })
}
