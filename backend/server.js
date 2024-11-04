const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running successfully");
// });

app.use("/api/user", userRoutes);

app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(5000, console.log(`Server started on PORT ${PORT}`));
