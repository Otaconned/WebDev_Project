var slidesArray = 0;
imageCarousel();

function imageCarousel(){
  var i;
  var s = document.getElementsByClassName("slide");
  for (i = 0; i < s.length; i++){
    s[i].style.display = "none";
  }
  slidesArray++
  if (slidesArray > s.length){slidesArray = 1}
  s[slidesArray-1].style.display = "block";
  setTimeout(imageCarousel, 2000);
}
