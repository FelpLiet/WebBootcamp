const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

let comments = [
  {
    id: 0,
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: 1,
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: 2,
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: 3,
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("comments/show", { comment });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
