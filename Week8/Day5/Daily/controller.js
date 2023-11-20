const fs = require('fs');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const usersFilePath = './users.json';

const readUsersFile = () => {
  try {
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
  } catch (error) {
    console.error('Error reading users file:', error.message);
    return [];
  }
};

const writeUsersFile = (data) => {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing users file:', error.message);
  }
};

const controller = {
  register: (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    const users = readUsersFile();

    const usernameExists = users.some((user) => user.username === username);
    const passwordExists = users.some((user) => bcrypt.compareSync(password, user.password));

    if (usernameExists || passwordExists) {
      return res.status(400).send('Username or password already exists');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      id: uuidv4(),
      name,
      lastName,
      email,
      username,
      password: hashedPassword,
    };

    users.push(newUser);
    writeUsersFile(users);

    res.send('Hello, your account was created');
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const users = readUsersFile();

    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send('Username not registered or incorrect password');
    }

    res.send(`Hi ${username}, welcome again`);
  },

  getAllUsers: (req, res) => {
    const users = readUsersFile();
    res.json(users);
  },

  getSpecificUser: (req, res) => {
    const userId = req.params.id;
    const users = readUsersFile();
    const user = users.find((u) => u.id === userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.json(user);
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const { name, lastName, email } = req.body;
    const users = readUsersFile();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return res.status(404).send('User not found');
    }

    users[userIndex] = { ...users[userIndex], name, lastName, email };
    writeUsersFile(users);

    res.send('User updated successfully');
  },
};

module.exports = controller;
