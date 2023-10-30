document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("displayData");
    const params = new URLSearchParams(window.location.search);
    const firstname = params.get("firstname");
    const lastname = params.get("lastname");
  
    const displayText = document.createTextNode(`First Name: ${firstname}, Last Name: ${lastname}`);
    section.appendChild(displayText);
  });
  