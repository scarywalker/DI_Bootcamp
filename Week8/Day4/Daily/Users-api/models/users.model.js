const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const _getAllUsers = () => {
  return db("users_public").select("*").orderBy("id");
};

const _getOneUser = (id) => {
  return db("users_public").select("*").where({ id });
};

const _addUser = async (login, password, email, first_name, last_name) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await db.transaction(async (trx) => {
      const [userId] = await trx("users").insert(
        { login, password: hashedPassword },
        ["id", "login"]
      );
      await trx("users_public").insert({ email, login, first_name, last_name });
    });
    return "User added successfully";
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add user");
  }
};

const _logUser = async (login, password) => {
  try {
    const user = await db("users")
      .select("id", "login", "password")
      .where({ login })
      .first();
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return {
          id: user.id,
          login: user.login,
        };
      }
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to authenticate user");
  }
};

const _updateUser = async (id, dataToUpdate) => {
  try {
    await db("users_public").where({ id }).update(dataToUpdate);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update user");
  }
};

module.exports = {
  _getAllUsers,
  _getOneUser,
  _addUser,
  _updateUser,
  _logUser,
};
