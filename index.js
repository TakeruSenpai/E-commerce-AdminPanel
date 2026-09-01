const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const adminRoutes = require("./routes/admin");
const productRoutes = require("./routes/ProductRoutes");

const app = express();
const PORT = 3000;

// connect database
connectDB();

app.use(express.json());
app.use(express.static("public"));
app.use("/admin", adminRoutes);
app.use("/api/products", productRoutes);


app.listen(PORT, () => {
  console.log("THIS IS THE REAL SERVER FILE");
});
