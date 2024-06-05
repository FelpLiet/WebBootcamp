require("dotenv").config();
const axios = require("axios");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const redditData = require("./data/data.json");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/horses", (req, res) => {
  const horses = [
    { horseName: "Spirit", breed: "Mustang" },
    { horseName: "Rain", breed: "Appaloosa" },
  ];
  res.render("horses", { horses });
});

app.get("/rand", async (req, res) => {
  const num = Math.floor(Math.random() * 1000);
  res.render("random", { rand: num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if(data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/search", async (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.json({ message: "NOTHING FOUND IF NOTHING SEARCHED" });
  } else {
    try {
      const response = await axios.get("https://api.pexels.com/v1/search", {
        params: { query: q },
        headers: { Authorization: `${process.env.PEXELS_API_KEY}` },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 - Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
