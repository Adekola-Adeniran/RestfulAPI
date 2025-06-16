import { v4 as uuidv4 } from "uuid";

let items = [];
export const getItems = (req, res) => {
  res.status(200).send(items);
};

export const createItem = (req, res) => {
  const { firstName, lastName, age } = req.body;

  if (!firstName || !lastName || typeof age !== "number") {
    res
      .status(400)
      .send("Invalid item data. Required: firstName, lastName, age(number)");
  }

  const newItem = { firstName, lastName, age, id: uuidv4() };
  items.push(newItem);

  res
    .status(201)
    .send(
      `Item with the name ${newItem.firstName} with id ${newItem.id} is added to the database`
    );
};

export const getItem = (req, res) => {
  const { id } = req.params;

  const foundItem = items.find((item) => item.id === id);
  if (!items) {
    return res.status(404).send("Item not found");
  }
  res.status(200).send(foundItem);
};

export const deleteItem = (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).send("Item not found");
  }

  items.splice(index, 1);

  res.status(200).send(`Item with id ${id} has been deleted from the database`);
};

export const updateItem = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const item = items.find((item) => item.id === id);
  if(!item){
    res.status(404).send("Item not found")
  }
  if (firstName !== undefined) {
    item.firstName = firstName;
  }
  if (lastName !== undefined) {
    item.lastName = lastName;
  }
  if (age !== undefined && typeof age === "number") {
    item.age = age;
  }else(res.status(404).send("Not a number"))

  res.status(200).send(`Item with the id ${id} has been updated`);
};
