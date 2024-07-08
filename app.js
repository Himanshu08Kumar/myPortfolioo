
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

const roles = ["Front-End Developer","Mern Stack Developer"];
let index = 0;
let isAnimating = false;
function changeRole() {
  if(isAnimating) return;

  let word = roles[index].split("");
  const dev = document.querySelector("#dev");
  dev.textContent = "";
  let wordIndex = 0;
  isAnimating = true;

  const wordInterval = setInterval(() => {
    if (wordIndex < word.length) {
      dev.textContent += word[wordIndex] + "";
      wordIndex++;
    } else {
      clearInterval(wordInterval);
      isAnimating = false;
    }
  }, 200);
  index = (index + 1) % roles.length;
}
setInterval(changeRole, 5000);
changeRole();

document.querySelector("#resumeLink").addEventListener("click", (event) => {
  event.preventDefault();

  const link = document.createElement("a");
  link.href ="https://drive.google.com/uc?export=download&id=1rBnKFPXI-W1Vs4c5GXIOjTn-ryaIoLUf";
  link.download = "Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


document.getElementById('openFormButton').addEventListener('click', function() {
  document.getElementById('formPopover').style.display = 'block';
});

document.getElementById('closeFormButton').addEventListener('click', function() {
  document.getElementById('formPopover').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const userEmail = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const mailtoLink = `mailto:himanshukumar802123@gmail.com?subject=Contact%20Form%20Submission&body=From:%20${encodeURIComponent(userEmail)}%0A%0A${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
  document.getElementById('formPopover').style.display = 'none';
  document.getElementById('contactForm').reset();
});



