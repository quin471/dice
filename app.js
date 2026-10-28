const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(`첫번째 랜덤숫자: ${randomNumber1}`);
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(`두번째 랜덤숫자: ${randomNumber2}`);

image1.setAttribute("src", `images/dice${randomNumber1}.png`);
image2.setAttribute("src", `images/dice${randomNumber2}.png`);

const h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  h1.textContent = "🚩Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = "Player2 Wins!🚩";
} else {
  h1.textContent = "Draw!";
}
