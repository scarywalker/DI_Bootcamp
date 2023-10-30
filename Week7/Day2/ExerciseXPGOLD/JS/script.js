document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  window.location.href = `display.html?firstname=${data.firstname}&lastname=${data.lastname}`;
});
