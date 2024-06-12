const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");
uuid();

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny!",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id: uuid(), username, comment });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params)
  const comment = comments.find((c) => c.id === id);
  console.log("Comment ID:", id);
  console.log("Found comment:", comment);
  if(comment){
    res.render("comments/show", { comment });
  } else {
    res.status(404).send("ID Not Found");
  }
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  if(foundComment){
    foundComment.comment = newCommentText;
    res.redirect("/comments");
  } else {
    res.status(404).send("ID Not Found");
  }
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  if(comment){
    res.render("comments/edit", { comment });
  } else {
    res.status(404).send("ID Not Found");
  }
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});