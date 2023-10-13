const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// add background music
if (bgMusicURL) {
  document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

//video
var video = document.getElementById("myvideo");
    video.addEventListener("loadedmetadata", function() {
      video.play();
    });
//redirect
document.getElementById("hi").addEventListener("click", function() {
  location.hash = "#about";
});

const paragraphs = document.querySelectorAll("p");

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleVisibility = (paragraph) => {
  if (isInViewport(paragraph)) {
    paragraph.classList.add("in-view");
  }
};

window.addEventListener("scroll", () => {
  paragraphs.forEach(handleVisibility);
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function validateForm() {
  if (!document.getElementById("terms").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}
function openForm01() {
  document.getElementById("myForm01").style.display = "block";
}

function closeForm01() {
  document.getElementById("myForm01").style.display = "none";
}
function validateForm01() {
  if (!document.getElementById("terms01").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}
function openForm011() {
  document.getElementById("myForm011").style.display = "block";
}

function closeForm011() {
  document.getElementById("myForm011").style.display = "none";
}
function validateForm011() {
  if (!document.getElementById("terms011").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}
function openForm11() {
  document.getElementById("myForm11").style.display = "block";
}function openForm22() {
  document.getElementById("myForm22").style.display = "block";
}function openForm33() {
  document.getElementById("myForm33").style.display = "block";
}function openForm44() {
  document.getElementById("myForm44").style.display = "block";
}
function openForm111() {
  document.getElementById("myForm111").style.display = "block";
}function openForm222() {
  document.getElementById("myForm222").style.display = "block";
}function openForm333() {
  document.getElementById("myForm333").style.display = "block";
}function openForm444() {
  document.getElementById("myForm444").style.display = "block";
}
function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}
function closeForm11() {
  document.getElementById("myForm11").style.display = "none";
}function closeForm22() {
  document.getElementById("myForm22").style.display = "none";
}function closeForm33() {
  document.getElementById("myForm33").style.display = "none";
}function closeForm44() {
  document.getElementById("myForm44").style.display = "none";
}
function closeForm111() {
  document.getElementById("myForm111").style.display = "none";
}function closeForm222() {
  document.getElementById("myForm222").style.display = "none";
}function closeForm333() {
  document.getElementById("myForm333").style.display = "none";
}function closeForm444() {
  document.getElementById("myForm444").style.display = "none";
}
function validateForm1() {
  if (!document.getElementById("terms1").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm2() {
  if (!document.getElementById("terms2").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm3() {
  if (!document.getElementById("terms3").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm4() {
  if (!document.getElementById("terms4").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}
function validateForm11() {
  if (!document.getElementById("terms11").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm22() {
  if (!document.getElementById("terms22").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm33() {
  if (!document.getElementById("terms33").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm44() {
  if (!document.getElementById("terms44").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}
function validateForm111() {
  if (!document.getElementById("terms111").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm222() {
  if (!document.getElementById("terms222").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm333() {
  if (!document.getElementById("terms333").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}function validateForm444() {
  if (!document.getElementById("terms444").checked) {
    alert("Please agree to the terms and conditions and privacy policy");
    return false;
  }
  return true;
}