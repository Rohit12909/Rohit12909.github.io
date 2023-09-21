function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("class");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function randomColor() {
  return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6)
}

function setColor() {
  document.getElementById('backgrounds').style.backgroundColor = randomColor();
  setTimeout(setColor, 2000);
}

setColor();
