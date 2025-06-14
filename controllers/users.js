import { v4 as uuidv4 } from "uuid";

let users = [];
export const getUsers = (req, res) => {
  res.status(200).send(users);
};

export const createUser = (req, res) => {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || typeof age !== "number") {
    res
      .status(400)
      .send("Invalid user data. Required: firstName, lastName, age(number)");
  }

  const newUser = { firstName, lastName, age, id: uuidv4() };
  users.push(newUser);

  res
    .status(201)
    .send(
      `User with the name ${newUser.firstName} with id ${newUser.id} is added to the database`
    );
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  if (!users) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users.splice(index, 1);

  res.status(200).send(`User with id ${id} has been deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);
  if(!user){
    res.status(404).send("User not found")
  }
  if (firstName !== undefined) {
    user.firstName = firstName;
  }
  if (lastName !== undefined) {
    user.lastName = lastName;
  }
  if (age !== undefined && typeof age === "number") {
    user.age = age;
  }else(res.status(404).send("Not a number"))

  res.status(200).send(`User with the id ${id} has been updated`);
};
