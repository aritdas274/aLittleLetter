function animateBox() {
      document.getElementById('button').classList.toggle('animate1');
      document.getElementById('image').classList.toggle('animate3');
      document.getElementById('deb').classList.toggle('animate2');
      document.getElementById('question').classList.toggle('animate4');
      document.getElementById('box1').classList.toggle('animate5');
      var audio = document.getElementById("myAudio");
    audio.play();
    }

function next1() {
      document.getElementById("box1").style.zIndex = "1";
      document.getElementById('box2').classList.toggle('animate3');
}

function next2() {
      document.getElementById("box2").style.zIndex = "2";
      document.getElementById('box3').classList.toggle('animate3');
}

function next3() {
      document.getElementById("box3").style.zIndex = "3";
      document.getElementById('box4').classList.toggle('animate3');
}

function next4() {
      document.getElementById("box4").style.zIndex = "4";
      document.getElementById('box5').classList.toggle('animate3');
}

function next5() {
      document.getElementById("box5").style.zIndex = "5";
      document.getElementById('box6').classList.toggle('animate3');
}
