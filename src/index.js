const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = []

app.post("/account", (request, response) => {
  const { cpf, name } = request.body;

  const customerAlreadyExists = customer.some(
    (customer) => customer.cpf === cpf
  );

  if(customerAlreadyExists) {
    return response.status(400).json({ error: "Customer Already exists!" })
  };

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return response.status(201).send()
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 8", "Curso 3"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7"]);
});

app.listen(3333);