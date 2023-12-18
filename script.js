let leftBtnSlider = document.getElementById("left-btn");
let rightBtnSlider = document.getElementById("right-btn");
let allImage = document.querySelectorAll(".hero-sec-img");
console.log(allImage.length - 1);

let startSlider = 0;
let endSlider = (allImage.length - 1) * 100;

leftBtnSlider.addEventListener("click", () => {
//   alert("left");
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  console.log(startSlider);
  allImage.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});



rightBtnSlider.addEventListener("click", () => {
//   alert("right");
  if (startSlider <= 0 && startSlider >= -700) {
    startSlider = startSlider - 100;
  }
  console.log(startSlider);
  allImage.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
});




// Back To Top js---------------

const backtotop = document.querySelector(".foot-panel1");
backtotop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Sidebar js---------------

const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const selectbtn = document.querySelector(".all-categary");
const contentBody = document.querySelector("#content-body")

selectbtn.addEventListener("click", () => {
  
  sidebar.classList.add("active");
  sidebar.classList.remove("hide");
  cross.classList.add("active");
  black.classList.add("active");
  document.body.classList.add("stop-scroll");
  contentBody.classList.add("opacity");
  header.classList.add("hiden-2");
});

cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  sidebar.classList.add("hide");
  cross.classList.remove("active");
  black.classList.remove("active");
  document.body.classList.remove("stop-scroll");
  contentBody.classList.remove("opacity");
  header.classList.remove("hiden-2");
});

const sign = document.querySelector(".ac");
const trig = document.querySelector(".tringle");
const signIn = document.querySelector(".hdn-sign");
const signbtn = document.querySelector(".nav-sign-part");

signbtn.addEventListener("click", () => {
  const herosec = document.querySelector(".hero-section");

  herosec.style.filter = "blur(6px)";
  if (signIn.classList.contains("active")) {
    herosec.style.filter = "";
  }
  black.classList.toggle("active-1");
  signIn.classList.toggle("active");
  signIn.classList.toggle("hide");
  trig.classList.toggle("active");
  document.body.classList.toggle("stop-scroll");
});

/* Product Scroller */

const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function(event){
  // alert("right");
  const content = document.querySelector(".product-slide");
  console.log(content.scrollLeft);
  console.log(content.scrollRight);
  content.scrollLeft +=300;
  console.log(content.scrollLeft);
  event.preventDefault();
});

leftbtn.addEventListener("click", function(event){
  // alert("left");
  const content = document.querySelector(".product-slide");
  console.log(content.scrollRight);
  console.log(content.scrollLeft);
  content.scrollLeft -=300;
  console.log(content.scrollRight);
  event.preventDefault();
});
