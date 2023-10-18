"use strict";

const num = document.querySelector(".num");
const btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    if (e.currentTarget.classList.contains("sub")) {
      console.log(e.currentTarget);
      count--;
    } else if (e.currentTarget.classList.contains("plus")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      num.style.color = "green";
    } else if (count < 0) {
      num.style.color = "red";
    } else {
      num.style.color = "#333";
    }
    num.textContent = count;
  });
});
