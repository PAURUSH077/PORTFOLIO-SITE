const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

module.exports = app;