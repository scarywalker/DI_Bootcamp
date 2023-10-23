let radius = document.getElementById("radius");
let volume = document.getElementById("volume");
let myForm = document.getElementById("MyForm");
myForm.addEventListener("submit", calVolume);
function calVolume(e){
  e.preventDefault();
  if (radius != '') {
      volume.value = `${((radius.value**3)*4)/3}π`   
 }
}