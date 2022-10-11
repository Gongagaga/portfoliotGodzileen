// JavaScript File

function aboutMe() {
  var about = document.querySelectorAll(".aboutMe");

  for (var i = 0; i < about.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = about[i].getBoundingClientRect().top;
    var elementVisible = 350;

    if (elementTop < windowHeight - elementVisible) {
      about[i].classList.add("active");
      console.log(elementTop, windowHeight-elementVisible);
    } else {
      about[i].classList.remove("active");
    }
  }
}

// ANIMATION 

window.addEventListener("scroll",aboutMe);