// drop down menu button codes//
const menuButtonToggle = document.getElementById("menuButton-toggle");
const menuButtonNav = document.getElementById("menuButton-nav");

const toggleMenuButton = () =>
{
  console.log("called toggleMenuButton")
  menuButtonNav.classList.toggle("menuButton-toggle");
}
menuButtonToggle.addEventListener("click", toggleMenuButton);



// dark mode codes//
function changeColor(color) {
    document.body.style.background = color;
}
function gfg_black() {
    changeColor('black');
}


//cursor codes//
var smallCursor = document.querySelector(".smallCursor");
var largeCursor = document.querySelector(".largeCursor");
document.onmousemove = function(e)
{
  smallCursor.style.left = (e.pageX - 5) + "px";
  smallCursor.style.top = (e.pageY - 5) + "px";
  smallCursor.style.display = "block";

  largeCursor.style.left = (e.pageX - 15) + "px";
  largeCursor.style.top = (e.pageY - 15) + "px";
  largeCursor.style.display = "block";
}
