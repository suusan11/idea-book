/* ----------
hamnurger01
---------- */
const menuToggle = document.getElementById('js-menu-toggle');
const menuWrap = document.querySelector('.menu__wrap');

const openTl = gsap.timeline({paused: true});
openTl.set(menuWrap, {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
})
.to(menuWrap, {
    clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%, 100% 100%)',
    duration: 0.4,
    ease: 'easeInOutQuad',
})
.to(menuWrap, {
    clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
    duration: 0.5,
    ease: 'easeInOutQuad',
    delay: -0.3,
});

const closeTl = gsap.timeline({paused: true});
closeTl.set(menuWrap, {
    clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
})
.to(menuWrap, {
    clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%, 100% 100%)',
    duration: 0.4,
    ease: 'easeInOutQuad',
})
.to(menuWrap, {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    duration: 0.5,
    ease: 'easeInOutQuad',
    delay: -0.3,
});


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is__open');
    if(menuToggle.classList.contains('is__open')) {
        closeTl.pause(); // 逆再生時にアニメーションが完了するのを待つために一時停止
        openTl.time(0); // タイムラインをリセット
        openTl.play();
    }else {
        // openTl.pause();
        closeTl.time(0);
        closeTl.play();
    }
})

/* ----------
hamnurger02
---------- */
const openBtn = document.getElementById('js-open-toggle');
const closeBtn = document.getElementById('js-close-toggle');
const menuContainer = document.querySelector('.menu__container');
openBtn.addEventListener('click', () => {
    menuContainer.classList.add('is__open');
});
closeBtn.addEventListener('click', () => {
    menuContainer.classList.remove('is__open');
});

/* ----------
hamnurger03
---------- */
const menu3 = document.getElementById('js-menu3');
const menu3Text = document.getElementById('js-menu-text');
menu3.addEventListener('click', () => {
    menu3.classList.toggle('is__active');
    if(menu3.classList.contains('is__active')) {
        menu3Text.innerHTML = "Close";
    }else {
        menu3Text.innerHTML = "Menu";
    }
});

/* ----------
hamnurger04
---------- */
const menu4Btn = document.getElementById('js-menu4-btn');
const menu4 = document.getElementById('js-menu4');
menu4Btn.addEventListener('click', () => {
    menu4.classList.toggle('is__open');
    if(menu4.classList.contains('is__open')) {
        menu4Btn.innerHTML = "CLOSE";
    }else {
        menu4Btn.innerHTML = "MENU";
    }
});

/* ----------
hamnurger05
---------- */
const menu5Btn = document.getElementById('js-menu5-btn');
const menu5 = document.getElementById('js-menu5');
menu5Btn.addEventListener('click', () => {
    menu5.classList.toggle('is__open');
});