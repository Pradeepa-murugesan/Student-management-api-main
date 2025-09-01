const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const studentRoutes = require("./routes/studentRoutes");
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running at: \x1b[34mhttp://localhost:${PORT}\x1b[0m`);
      console.log(`Swagger docs at: \x1b[34mhttp://localhost:${PORT}/api-docs\x1b[0m`);
      console.log(`Server listening on port ${PORT}`);
    });

  })
  .catch(err => console.log("MongoDB connection error:", err));
