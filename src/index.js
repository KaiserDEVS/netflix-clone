document.getElementById("searchButton").onclick = function() {
  var obj = document.getElementById("inputtext");
  if (obj.style.display == 'block') {
    obj.style.display = 'none' 
  } else {
    obj.style.display = 'block'
  }
}

document.getElementById("menuHamburger").onclick = function() {
  var obj = document.getElementById("navbar");
  if (obj.style.display == 'block') {
    obj.style.display = 'none' 
  } else {
    obj.style.display = 'block'
  }
}