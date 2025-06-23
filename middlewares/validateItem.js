export const validateItem = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || typeof name !== "string") {
    res.status(400).json({ Error: "Name required must be a string" });
  }
  if (!description || typeof description !== "string") {
    res.status(400).json({ Error: "Description required must be string" });
  }
  next();
};
