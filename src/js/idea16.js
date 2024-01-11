const animeContainer = document.querySelector('#js-anime-container');
let els = [];
const elNum = 21;
// function createElm() {
    for(let i = 0; i < elNum; i++) {
        els[i] = document.createElement('div');
        els[i].id = "js-anime-target-" + (i + 1);
        
        if(i < 7) {
            els[i].classList.add("anime-target", "circle");
        } else if(i > 8 && i < 14) {
            els[i].classList.add("anime-target", "square");
        } else {
            els[i].classList.add("anime-target", "triangle");
        }
        animeContainer.appendChild(els[i]);
    }
// }

const colorCode = ["#F20587", "#861BF2", "#5C82F2", "#07DBF2", "#07F2B0", "#E3BA62", "#5B5AA9"];
// const colorCode = ["#e60012", "#e95189", "#0cade7", "#00a0b8", "#fcc800", "#9edef5", "#f06671"];
// function setRandomColor() {
//     for(let i = 0; i < elNum; i++) {
//         const colorNum = Math.floor(Math.random() * colorCode.length);
//         const rondomColor = colorCode[colorNum];
//         els[i].style.backgroundColor = rondomColor;
//         els[i].style.borderColor = rondomColor;
//         // gsap.set(els[i], {backgroundColor: rondomColor})
//         // return rondomColor;
//     }
// }

const minScale = .05;
const maxScale = .7;
// // let changeNum = Math.random() * (maxScale - minScale) + minScale;
// function setRandomNum() {
//     for (let i = 0; i < elNum; i++) {
//         const rondomNum = Math.random() * (maxScale - minScale) + minScale;
//         // els[i].style.scale = 0;
//         // els[i].style.opacity = changeNum;
//         // return changeNum;
//         // gsap.set(els[i], {opacity: rondomNum, scale: rondomNum})
//         return rondomNum;
//     }
// }

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

let odd = [];
let even = [];
for(let i = 0; i < els.length; i++) {
    if(i % 2 === 0) {
        even.push(els[i]);
    }else {
        odd.push(els[i]);
    }
}
console.log(odd);

// unexpectedly v.1
// function play() {
//     var tl = gsap.timeline();
//     tl.to('.anime-target',
//     {
//         backgroundColor: function setRandomColor() {
//             for(let i = 0; i < elNum; i++) {
//                 const colorNum = Math.floor(Math.random() * colorCode.length);
//                 const rondomColor = colorCode[colorNum];
//                 return rondomColor;
//             }
//         },
//         scale: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
//                 return changeNum;
//             }
//         },
//         opacity: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale;
//                 return changeNum;
//             }
//         },
//         ease: Power2.easeInOut,
//         delay: .5 * Math.random(),
//         duration: 3,
//     })
//     .to('.anime-target', {
//         x: function setRondomX() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerWidth - innerWidth / 2);
//                 return changeNum;
//             }
//         },
//         y: function setRondomY() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerHeight - innerHeight / 2);
//                 return changeNum;
//             }
//         },
//         ease: Back.easeInOut,
//         // delay: .5 * Math.random(),
//         duration: 5
//     })
//     .to('.anime-target', {
//         onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
//             play();
//         },
//     })
// }
// play(); // init

// unexpectedly v.2
// function playOdd() {
//     var tl = gsap.timeline();
//     tl.to(odd,
//     {
//         backgroundColor: function setRandomColor() {
//             for(let i = 0; i < elNum; i++) {
//                 const colorNum = Math.floor(Math.random() * colorCode.length);
//                 const rondomColor = colorCode[colorNum];
//                 return rondomColor;
//             }
//         },
//         scale: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
//                 return changeNum;
//             }
//         },
//         opacity: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale;
//                 return changeNum;
//             }
//         },
//         ease: Power2.easeInOut,
//         delay: .5 * Math.random(),
//         duration: 3,
//     })
//     .to(odd, {
//         x: function setRondomX() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerWidth - innerWidth / 2);
//                 return changeNum;
//             }
//         },
//         y: function setRondomY() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerHeight - innerHeight / 2);
//                 return changeNum;
//             }
//         },
//         ease: Back.easeInOut,
//         // delay: .5 * Math.random(),
//         duration: 6.5 // 5 + timeout of even
//     })
//     .to(odd, {
//         onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
//             playOdd();
//         },
//     })
// }
// playOdd(); // init
// function playEven() {
//     var tl = gsap.timeline();
//     tl.to(even,
//     {
//         backgroundColor: function setRandomColor() {
//             for(let i = 0; i < elNum; i++) {
//                 const colorNum = Math.floor(Math.random() * colorCode.length);
//                 const rondomColor = colorCode[colorNum];
//                 return rondomColor;
//             }
//         },
//         scale: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
//                 return changeNum;
//             }
//         },
//         opacity: function setRandomNum() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.random() * (maxScale - minScale) + minScale;
//                 return changeNum;
//             }
//         },
//         ease: Power2.easeInOut,
//         delay: .5 * Math.random(),
//         duration: 3,
//     })
//     .to(even, {
//         x: function setRondomX() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerWidth - innerWidth / 2);
//                 return changeNum;
//             }
//         },
//         y: function setRondomY() {
//             for (let i = 0; i < elNum; i++) {
//                 const changeNum = Math.floor(Math.random() * innerHeight - innerHeight / 2);
//                 return changeNum;
//             }
//         },
//         ease: Back.easeInOut,
//         // delay: .5 * Math.random(),
//         duration: 5
//     })
//     .to(even, {
//         onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
//             playEven();
//         },
//     })
// }
// setTimeout((function() {
//         playEven(); // init
//     }
// ), 1500)

// close v.1
// function play() {
//     gsap.fromTo('.anime-target',
//         { x: 0, y: 0, scale: 0, opacity: 0 },
//         {
//             backgroundColor: function setRandomColor() {
//                 for(let i = 0; i < elNum; i++) {
//                     const colorNum = Math.floor(Math.random() * colorCode.length);
//                     const rondomColor = colorCode[colorNum];
//                     return rondomColor;
//                 }
//             },
//             scale: function setRandomNum() {
//                 for (let i = 0; i < elNum; i++) {
//                     const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
//                     return changeNum;
//                 }
//             },
//             opacity: function setRandomNum() {
//                 for (let i = 0; i < elNum; i++) {
//                     const changeNum = Math.random() * (maxScale - minScale) + minScale;
//                     return changeNum;
//                 }
//             },
//             x: function setRondomX() {
//                 for (let i = 0; i < elNum; i++) {
//                     const changeNum = Math.floor(Math.random() * innerWidth - innerWidth / 2);
//                     return changeNum;
//                 }
//             },
//             y: function setRondomY() {
//                 for (let i = 0; i < elNum; i++) {
//                     const changeNum = Math.floor(Math.random() * innerHeight - innerHeight / 2);
//                     return changeNum;
//                 }
//             },
//             ease: Power2.easeInOut,
//             delay: .5 * Math.random(),
//             duration: 5,
//             onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
//                 play();
//             },
//         },
//     );
// }
// play(); // init

// close v.2
function play() {
    gsap.set('.anime-target', {x: 0, y: 0, scale: 0, opacity: 0})
    var tl = gsap.timeline();
    tl.to(odd,
        {
            x: function setRondomX() {
                for (let i = 0; i < elNum; i++) {
                    const targetX = (Math.floor(Math.random() * innerWidth - innerWidth / 2));
                    return targetX;
                }
            },
            y: function setRondomY() {
                for (let i = 0; i < elNum; i++) {
                    const targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
                    return targetY;
                }
            },
            backgroundColor: function setRandomColor() {
                for(let i = 0; i < elNum; i++) {
                    const colorNum = Math.floor(Math.random() * colorCode.length);
                    const rondomColor = colorCode[colorNum];
                    return rondomColor;
                }
            },
            // borderColor: function setRandomColor() {
            //     for(let i = 0; i < elNum; i++) {
            //         const colorNum = Math.floor(Math.random() * colorCode.length);
            //         const rondomColor = colorCode[colorNum];
            //         return rondomColor;
            //     }
            // },
            scale: function setRandomNum() {
                for (let i = 0; i < elNum; i++) {
                    const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
                    return changeNum;
                }
            },
            opacity: function setRandomNum() {
                for (let i = 0; i < elNum; i++) {
                    const changeNum = Math.random() * (maxScale - minScale) + minScale;
                    return changeNum;
                }
            },
            // clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            // ease: Power0.easeOut,
            ease: Power2.easeInOut,
            // delay: .5 * Math.random(),
            duration: 1,
        },
    )
    tl.to(even,
        {
            x: function setRondomX() {
                for (let i = 0; i < elNum; i++) {
                    const targetX = Math.floor(Math.random() * innerWidth - innerWidth / 2);
                    return targetX;
                }
            },
            y: function setRondomY() {
                for (let i = 0; i < elNum; i++) {
                    const targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
                    return targetY;
                }
            },
            backgroundColor: function setRandomColor() {
                for(let i = 0; i < elNum; i++) {
                    const colorNum = Math.floor(Math.random() * colorCode.length);
                    const rondomColor = colorCode[colorNum];
                    return rondomColor;
                }
            },
            // borderColor: function setRandomColor() {
            //     for(let i = 0; i < elNum; i++) {
            //         const colorNum = Math.floor(Math.random() * colorCode.length);
            //         const rondomColor = colorCode[colorNum];
            //         return rondomColor;
            //     }
            // },
            scale: function setRandomNum() {
                for (let i = 0; i < elNum; i++) {
                    const changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
                    return changeNum;
                }
            },
            opacity: function setRandomNum() {
                for (let i = 0; i < elNum; i++) {
                    const changeNum = Math.random() * (maxScale - minScale) + minScale;
                    return changeNum;
                }
            },
            // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            // ease: Power0.easeOut,
            ease: Power2.easeInOut,
            // delay: .5 * Math.random(),
            duration: 1,
        }, '-=0.8'
    )
    tl.to(odd,
        {
            x: function setMoveX() {
                for (let i = 0; i < elNum; i++) {
                    const targetX = (Math.floor(Math.random() * innerWidth - innerWidth / 2));
                    return targetX;
                }
            },
            y: function setMoveY() {
                for (let i = 0; i < elNum; i++) {
                    const targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
                    return targetY;
                }
            },
            ease: Power2.easeInOut,
            // delay: .5 * Math.random(),
            duration: 5,
            // onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
            //     play();
            // },
        },
    )
    tl.to(even,
        {
            x: function setMoveX() {
                for (let i = 0; i < elNum; i++) {
                    const targetX = (Math.floor(Math.random() * innerWidth - innerWidth / 2));
                    return targetX;
                }
            },
            y: function setMoveY() {
                for (let i = 0; i < elNum; i++) {
                    const targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
                    return targetY;
                }
            },
            ease: Power2.easeInOut,
            // delay: .5 * Math.random(),
            duration: 3,
            // onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
            //     play();
            // },
        }, '-=4'
    )
    tl.to(odd,
        {
            x: 0, y: 0, scale: 0, opacity: 0, ease: Power1.easeOut,
        },
    )
    tl.to(even,
        {
            x: 0, y: 0, scale: 0, opacity: 0, ease: Power1.easeOut,
            onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
                play();
            },
        }, '-=0.5'
    )
}
play(); // init