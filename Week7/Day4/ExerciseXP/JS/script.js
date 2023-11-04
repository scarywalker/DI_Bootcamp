// 1

// const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// fetch(apiUrl)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Failed to fetch data');
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 2

// const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// const searchQuery = "sun";
// const limit = 10;
// const offset = 2;

// const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;

// fetch(apiUrl)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Failed to fetch data');
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 3

// async function fetchStarshipData() {
//     try {
//       const response = await fetch("https://www.swapi.tech/api/starships/9/");
  
//       if (response.ok) {
//         const objectStarWars = await response.json();
//         console.log(objectStarWars.result);
//       } else {
//         throw new Error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
// fetchStarshipData();

// 4

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// it logs calling and logs resolved 2 seconds later