const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];

for (let robot of robots) {
  const id = robot.id
  const img = robot.image
  const name = robot.name
  const mail = robot.email
  const username = robot.name
  const container = document.getElementById(`robo${id}`);
  container.querySelector('img').setAttribute("src",`${img}`)
  container.querySelector('.name').textContent = `${name}`
  container.querySelector('.mail').textContent = `${mail}`
}

const searchInput = document.getElementById("searchInput");

function filterAndDisplayRobots() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredRobots = robots.filter((robot) => {
    const robotName = robot.name.toLowerCase();
    return robotName.includes(searchTerm);
  });

  for (let robot of robots) {
    const container = document.getElementById(`robo${robot.id}`);
    const robotName = robot.name.toLowerCase();
    const norobot = document.getElementById(`robo11`)
    norobot.style.display = "flex"
    if (filteredRobots.includes(robot)) {
      container.style.display = "flex";
      norobot.style.display = "none"
    } else {
      container.style.display = "none";
    }
  }
}

searchInput.addEventListener("input", filterAndDisplayRobots);
