function openCity(evt, skill)
{
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");

    for (i=0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i=0; i < tablinks.length; i++)
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(skill).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

function randomColor() {
    return '#' + ('000000' + (Math.random() * 0xFFFFFF << 0).toString(16)).slice(-6)
}

function setColor() {
    document.getElementById('backgrounds').style.backgroundColor = randomColor();
    setTimeout(setColor, 2000);
}

setColor();
  