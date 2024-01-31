function reveal(){
  document.getElementById("todoentry").style.display = "block";
  document.getElementById("btnentry").style.display = "none";
}

function hideimportant(first, second){
  document.getElementById(first).style.display = "none";
  document.getElementById(second).style.display = "block";
}
