require("dotenv").config();
const axios = require("axios");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../async")));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "async", "index.html"));
});

app.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.json({ message: "NOTHING FOUND IF NOTHING SEARCHED" });
  } else {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: q },
        headers: { Authorization: `${process.env.PEXELS_API_KEY}` }
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
});


app.get("/pomba/:tipoPomba", (req, res) => {
  const { tipoPomba } = req.params;
  res.send(`<h1>Hello Pomba da especie ${tipoPomba}</h1>`);
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 - Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
