let header = document.getElementById('header');

document.addEventListener('scroll',() => {
  if ( window.pageYOffset > 80 ) {
    header.style.backgroundColor = "#ffffff75";
    header.style.backdropFilter = "blur(7px)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.filter = "blur(0px)";
  }
});