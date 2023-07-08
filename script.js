let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let random = Math.floor(Math.random() * 3);
let triangle = document.querySelector("#rotate");
let winModel = document.querySelector(".win-model");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let scoreComputer = JSON.parse(localStorage.getItem("scoreComputer"));
let scoreHuman = JSON.parse(localStorage.getItem("scoreHuman"));
let scoreCelement = document.getElementById("scorec");
let scoreHelement = document.getElementById("scoreh");
let rulebtn = document.querySelector(".btn-rule");
let rulemodel = document.querySelector(".rule-model");
let ruleimage = document.querySelector(".rule-img");
if (scoreComputer) {
  scoreCelement.innerText = scoreComputer;
}
if (scoreHuman) {
  scoreHelement.innerText = scoreHuman;
}

let countCom = 0;
let countHum = 0;

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    triangle.style.display = "none";
    con.forEach((item) => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      computer[random].style.display = "block";
      computer[random].classList.add("right");
    }, 1000);
    setTimeout(() => {
      if (random == index) {
        winModel.style.display = "flex";
        winner.innerText = "TIE UP";
        play.innerText = "REPLAY";
      } else if (
        (index == 0 && random == 1) ||
        (index == 1 && random == 2) ||
        (index == 2 && random == 0)
      ) {
        winModel.style.display = "flex";
        winner.innerText = "YOU WIN";
        countHum = scoreHuman;
        countHum++;
        scoreHelement.innerText = countHum;
        localStorage.setItem("score", JSON.stringify(countHum));
      } else {
        winModel.style.display = "flex";
        winner.innerText = "YOU LOST";
        countCom++;
        scoreCelement.innerText = countCom;
        localStorage.setItem("score", JSON.stringify(countCom));
      }
    }, 1500);
  });
});
play.addEventListener("click", () => {
  window.location.reload();
});

rulebtn.addEventListener("click", () => {
  rulemodel.style.display = "flex";
  setTimeout(() => {
    ruleimage.style.transform = "translateY(0)";
  }, 500);
  console.log("hy");
});
let closebtn = document.querySelector(".close");
closebtn.addEventListener("click", () => {
  ruleimage.style.transform = "translateY(-200%)";
  setTimeout(() => {
    rulemodel.style.display = "none";
  }, 1000);
});
