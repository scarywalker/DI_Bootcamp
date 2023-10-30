const form = document.getElementsByTagName("form")[0];
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

form.addEventListener("submit", getUser);
function getUser(e){
  e.preventDefault();
  let first = fname.value;
  let last = lname.value;
  if (first != '' && last != '') {
  console.log(`{"name":"${first}","lastname":"${last}"}`);
  let user = document.createElement('li');
  let usersAnswer = document.getElementsByClassName("usersAnswer")[0];
  user.textContent = `{"name":"${first}","lastname":"${last}"}`;
  usersAnswer.appendChild(user);
 }
}