function alien(){
  document.getElementById("alienDiv").innerHTML = "<img src='boss.png' class='gremlin' width='250' height='150' >"
  setTimeout(function(){
    alien()
  },5000)
}

alien()