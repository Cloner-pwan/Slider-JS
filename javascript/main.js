let slides = document.querySelectorAll(".slide");
let nextbtn = document.querySelector("#nextbtn");
let prevbtn = document.querySelector("#prevbtn");
let counter = 0;
let generateSlider = (c) => {
  slides.forEach((elem, index) => {
    elem.style.left = `${(index - c) * 100}%`;
  });
};

generateSlider(counter);

let next = () => {
  if (counter === slides.length - 1) {
    counter = 0;
    generateSlider(counter);
  } else {
    counter++;
    generateSlider(counter);
  }
};

let prev = () => {
  if (counter === 0) {
    counter = slides.length - 1;
    generateSlider(counter);
  } else {
    counter--;
    generateSlider(counter);
  }
};
nextbtn.addEventListener("click", () => {
  next();
});

prevbtn.addEventListener("click", () => {
  prev();
});
