const express = require("express");

const app = express();
const port = 8080;

const people = [];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/register", (request, response) => {
  response.render("register");
});

app.post("/register", (request, response) => {
  const firstname = request.body.firstname;
  const lastname = request.body.lastname;
  const email = request.body.email;
  const password = request.body.password;

  people.push({
    firstname,
    lastname,
    email,
    password,
  });

  console.log(people);

  response.redirect("/total-register");
});

app.get("/view-people", (request, response) => {
  response.json(people);
});

app.get("/total-register", (request, response) => {
  response.render("total-register", {
    people,
  });
});

app.listen(port, () => {
  console.log(`Working on http://localhost:${port}`);
});
