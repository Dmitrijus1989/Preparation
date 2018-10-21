
document.getElementById('dropik').addEventListener("mouseover", function() {
  document.getElementById('dropdown').style.display = "block";
})
document.getElementById('dropik').addEventListener("mouseout", function() {
  document.getElementById('dropdown').style.display = "none";
})


var userSelection = document.getElementsByClassName('myInputs');

for(var i = 0; i < userSelection.length; i++) {
  (function(index) {
    userSelection[index].addEventListener("click", function() {
       userSelection[index].value = "";
     })
  })(i);
}
