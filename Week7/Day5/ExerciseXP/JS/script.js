console.log('ver 2.3 ajax');
let xhr = new XMLHttpRequest();

let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

function getInfo() {
  updateWithLoading();
  let randomNumber = Math.floor((Math.random() * 88) + 1);
  let apiUrl = 'https://swapi.dev/api/people/' + randomNumber + '/';
  xhr.open('GET', apiUrl);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      updateInfoWithError();
      console.log('there was an error');
    } else {
      updateInfo(xhr.response);
    }
  }
  xhr.onerror = function () {
    updateInfoWithError();
    console.log('there was an error');
  };
}

function updateInfo(resp) {
  let url = new URL(resp.homeworld);
  url.protocol = 'https:'
  xhr.open('GET', url.href);
  xhr.responseType = 'json';
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log('there was an error 2');
    } else {
      resp.homeworld = xhr.response.name;
      updateCharacterInfo(resp);
    }
  }
  xhr.onerror = function () {
    console.log('there was an error 3');
  };
  console.log(resp.homeworld);
}

function updateCharacterInfo(resp) {
  console.log(resp.homeworld);
  console.log(resp.name);

  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height} cm`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
  homeWorld.innerText = `Home World: ${resp.homeworld}`;
}

function updateInfoWithError() {
  names.innerText = `Oh No! That person isn't available.`;
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

function updateWithLoading() {
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

button.addEventListener('click', getInfo);