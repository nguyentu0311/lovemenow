const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesClickCount = 0; // Đếm số lần nhấn nút Yes

yesBtn.addEventListener("click", () => {
  yesClickCount++; // Tăng biến đếm mỗi lần nhấn
  if (yesClickCount === 1) {
    question.innerHTML = "I love you too! 😘";
    gif.src =
      "https://i.pinimg.com/originals/58/23/24/582324fbf51a81471e98e428fda121fd.gif";
  } else if (yesClickCount === 2) {
    window.open("https://www.facebook.com/adgrngn/", "_blank");
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});