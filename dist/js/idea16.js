"use strict";

var animeContainer = document.querySelector('#js-anime-container');
var els = [];
var elNum = 21; // function createElm() {

for (var i = 0; i < elNum; i++) {
  els[i] = document.createElement('div');
  els[i].id = "js-anime-target-" + (i + 1);

  if (i < 7) {
    els[i].classList.add("anime-target", "circle");
  } else if (i > 8 && i < 14) {
    els[i].classList.add("anime-target", "square");
  } else {
    els[i].classList.add("anime-target", "triangle");
  }

  animeContainer.appendChild(els[i]);
} // }


var colorCode = ["#F20587", "#861BF2", "#5C82F2", "#07DBF2", "#07F2B0", "#E3BA62", "#5B5AA9"]; // const colorCode = ["#e60012", "#e95189", "#0cade7", "#00a0b8", "#fcc800", "#9edef5", "#f06671"];
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

var minScale = .05;
var maxScale = .7; // // let changeNum = Math.random() * (maxScale - minScale) + minScale;
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

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;
var odd = [];
var even = [];

for (var _i = 0; _i < els.length; _i++) {
  if (_i % 2 === 0) {
    even.push(els[_i]);
  } else {
    odd.push(els[_i]);
  }
}

console.log(odd); // unexpectedly v.1
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
  gsap.set('.anime-target', {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0
  });
  var tl = gsap.timeline();
  tl.to(odd, {
    x: function setRondomX() {
      for (var _i2 = 0; _i2 < elNum; _i2++) {
        var targetX = Math.floor(Math.random() * innerWidth - innerWidth / 2);
        return targetX;
      }
    },
    y: function setRondomY() {
      for (var _i3 = 0; _i3 < elNum; _i3++) {
        var targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
        return targetY;
      }
    },
    backgroundColor: function setRandomColor() {
      for (var _i4 = 0; _i4 < elNum; _i4++) {
        var colorNum = Math.floor(Math.random() * colorCode.length);
        var rondomColor = colorCode[colorNum];
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
      for (var _i5 = 0; _i5 < elNum; _i5++) {
        var changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
        return changeNum;
      }
    },
    opacity: function setRandomNum() {
      for (var _i6 = 0; _i6 < elNum; _i6++) {
        var changeNum = Math.random() * (maxScale - minScale) + minScale;
        return changeNum;
      }
    },
    // clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    // ease: Power0.easeOut,
    ease: Power2.easeInOut,
    // delay: .5 * Math.random(),
    duration: 1
  });
  tl.to(even, {
    x: function setRondomX() {
      for (var _i7 = 0; _i7 < elNum; _i7++) {
        var targetX = Math.floor(Math.random() * innerWidth - innerWidth / 2);
        return targetX;
      }
    },
    y: function setRondomY() {
      for (var _i8 = 0; _i8 < elNum; _i8++) {
        var targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
        return targetY;
      }
    },
    backgroundColor: function setRandomColor() {
      for (var _i9 = 0; _i9 < elNum; _i9++) {
        var colorNum = Math.floor(Math.random() * colorCode.length);
        var rondomColor = colorCode[colorNum];
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
      for (var _i10 = 0; _i10 < elNum; _i10++) {
        var changeNum = Math.random() * (maxScale - minScale) + minScale.toFixed(2);
        return changeNum;
      }
    },
    opacity: function setRandomNum() {
      for (var _i11 = 0; _i11 < elNum; _i11++) {
        var changeNum = Math.random() * (maxScale - minScale) + minScale;
        return changeNum;
      }
    },
    // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    // ease: Power0.easeOut,
    ease: Power2.easeInOut,
    // delay: .5 * Math.random(),
    duration: 1
  }, '-=0.8');
  tl.to(odd, {
    x: function setMoveX() {
      for (var _i12 = 0; _i12 < elNum; _i12++) {
        var targetX = Math.floor(Math.random() * innerWidth - innerWidth / 2);
        return targetX;
      }
    },
    y: function setMoveY() {
      for (var _i13 = 0; _i13 < elNum; _i13++) {
        var targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
        return targetY;
      }
    },
    ease: Power2.easeInOut,
    // delay: .5 * Math.random(),
    duration: 5 // onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
    //     play();
    // },

  });
  tl.to(even, {
    x: function setMoveX() {
      for (var _i14 = 0; _i14 < elNum; _i14++) {
        var targetX = Math.floor(Math.random() * innerWidth - innerWidth / 2);
        return targetX;
      }
    },
    y: function setMoveY() {
      for (var _i15 = 0; _i15 < elNum; _i15++) {
        var targetY = Math.floor(Math.random() * innerHeight - innerHeight / 2);
        return targetY;
      }
    },
    ease: Power2.easeInOut,
    // delay: .5 * Math.random(),
    duration: 3 // onComplete: () => { // 処理が終わってからまた関数を実行することでrepeatのような効果になる
    //     play();
    // },

  }, '-=4');
  tl.to(odd, {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    ease: Power1.easeOut
  });
  tl.to(even, {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    ease: Power1.easeOut,
    onComplete: function onComplete() {
      // 処理が終わってからまた関数を実行することでrepeatのような効果になる
      play();
    }
  }, '-=0.5');
}

play(); // init