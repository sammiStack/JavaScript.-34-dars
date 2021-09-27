"use strict";
const btn = document.querySelector(".crimson");

function btnAnimation() {
  const box = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(animationframe, 100);
  function animationframe() {
    if (pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
      box.style.top = pos + "px";
    }
    console.log("Hi");
  }
}
btn.addEventListener("click", btnAnimation);

// let timerID,
//   i = 0;
// btn.addEventListener("click", () => {
//   //   const timer = setTimeout(function () {
//   //     console.log("Hello world");
//   //   }, 2000);

//   timerID = setInterval(function () {
//     if (i === 3) {
//       clearInterval(timerID);
//     }
//     console.log("Hello world");
//     i++;
//     console.log(i);
//   }, 1000);
// });

// let id = setTimeout(function log() {
//   console.log("Hello world");
//   id = setTimeout(log, 1000);
// }, 1000);
