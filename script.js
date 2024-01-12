const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const hireBtn = document.querySelector(".hire-btn");
const noBtn = document.querySelector(".not-now-btn");
const formContainer = document.querySelector(".form-container");
const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
let formSubmitted = false;

const funnyThreats = [
  "Did I stutter?",
  "You tried to click on the wrong button, right?",
  "That was a mistake, right?",
  "You're pushing my buttons, but not the right ones.",
  "You really don't want to do that. Trust me.",
  "Careful where you point that cursor.",
  "I'm watching you. And judging you.",
  "Warning! Malicious software detected.Click 'Hire' to install security update immediately.",
  "Are you afraid of commitment? Is that what your therapist said?",
  "Listen, I'm not here to judge your life choices. But clicking that button? That's a choice that screams 'regret'.",
  "If you click that button, I'm releasing the squirrels. And trust me, you don't want to deal with an army of revenge squirrels.",
  "Ransomware encrypted your files. Click 'Hire' to purchase the decryption key.",
  "Click that and I'll email all your browser history to your mother.",
  "I have your IP address right here. 192.168.0.1",
  "You seem tense. Perhaps some calming music instead of clicking buttons?",
  "That button casts a level 20 Confusion Spell. Are you sure?",
  "I'll sign you up for so many email lists if click that button.",
  "Click at your own risk. I know where you downloaded that album from.",
  "Don't click, okay Let's just be friends.",
];

let lastThreatIndex;

hireBtn.addEventListener("click", () => {
  formContainer.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const wrapperRect = wrapper.getBoundingClientRect();
  const questionRect = question.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  let randomX, randomY;

  do {
    randomX = Math.max(0, Math.min(maxX, Math.floor(Math.random() * maxX)));
    randomY = Math.max(0, Math.min(maxY, Math.floor(Math.random() * maxY)));
  } while (
    randomX + noBtnRect.width > wrapperRect.left &&
    randomX < wrapperRect.right &&
    randomY + noBtnRect.height > wrapperRect.top &&
    randomY < wrapperRect.bottom
  );

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * funnyThreats.length);
  } while (randomIndex === lastThreatIndex);

  lastThreatIndex = randomIndex;
  question.textContent = funnyThreats[randomIndex];
});

window.addEventListener("beforeunload", function (e) {
  if (!formSubmitted) {
    e.preventDefault();
    e.returnValue = "";
    return "Error, you tried to leave without hiring me. Please click yes to proceed";
  }
});

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const message = messageInput.value;
  if (message.includes("You're hired, reply to this email")) {
    formSubmitted = true;
    window.location.href = `mailto:example@gmail.com?subject=Congrats on Your Job Application!&body=${message}`;
  } else {
    alert("Error: Only valid inputs, such as 'You're hired, reply to this email,' are allowed. Please enter this phrase.");
  }
});
