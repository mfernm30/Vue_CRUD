// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import routes
import Router from "./routes/routes.js";

// Init express
const app = express();

// Use express json
app.use(express.json());

// Use cors
app.use(cors());

// Use router
app.use(Router);

// Run server on port 5000
app.listen(5000, () => {
  console.log("Server running successfully");
});
