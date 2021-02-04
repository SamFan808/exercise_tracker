const path = require("path");

module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
    console.log("hello from index");
  });

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
    console.log("hello from exercise!");
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
    console.log("hello from stats!");
  });
};
