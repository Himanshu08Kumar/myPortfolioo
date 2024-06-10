document.querySelector(".iWeat").addEventListener("click", () => {
  window.open("https://himanshu08kumar.github.io/WeatherApp/", "_blank");
});

document.querySelector(".prep").addEventListener("click", () => {
  window.open("https://github.com/Himanshu08Kumar/PrepIt", "_blank");
});

document.querySelector(".notee").addEventListener("click", () => {
  window.open("https://github.com/Himanshu08Kumar/Notepad", "_blank");
});

document.querySelector(".homee").addEventListener("click", () => {
  window.open(
    "https://github.com/Himanshu08Kumar/IOT-Home-Automation",
    "_blank"
  );
});

const roles = ["Front-End Developer", "Mern Stack Developer"];
let index = 0;
function changeRole() {
  let word = roles[index].split("");
  const dev = document.querySelector("#dev");
  dev.textContent = "";
  let wordIndex = 0;

  const wordInterval = setInterval(() => {
    if (wordIndex < word.length) {
      dev.textContent += word[wordIndex] + "";
      wordIndex++;
    } else {
      clearInterval(wordInterval);
    }
  }, 200);
  index = (index + 1) % roles.length;
}
setInterval(changeRole, 5000);
changeRole();

document.querySelector("#resumeLink").addEventListener("click", (event) => {
  event.preventDefault();

  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=192Qf8032yQOy7NztmeWyZmUPxRed73Oy";
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
