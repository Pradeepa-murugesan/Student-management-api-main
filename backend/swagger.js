const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Management API",
      version: "1.0.0",
      description: "API for managing students (built with Express & MongoDB)",
    },
    servers: [
      {
        url: "http://localhost:5000", 
      },
    ],
  },
  apis: ["./routes/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
