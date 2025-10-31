

// FAQS script

const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));


console.log(hidden);

function toggleImage() {
 let src1 = "/assert/images/icon-plus.svg";
let src2 = "/assert/images/icon-minus.svg";
let imageElement = document.getElementById('toggle-image');
imageElement.src = (imageElement.src === src1)? src2 : src1;

}







       