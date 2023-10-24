const libForm = document.getElementById("libform");
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const libButton = document.getElementById("lib-button");
const story = document.getElementById("story");

libButton.addEventListener("click", libIt);
function libIt(e){
  e.preventDefault();
  if (noun.value != '' && adjective.value != '' && person.value != '' && verb.value != '' && place.value != '') {
      story.textContent = `${person.value}  ${verb.value} ${adjective.value} ${noun.value} in ${place.value}`   
 }
}