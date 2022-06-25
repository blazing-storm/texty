const express = require("express");
const env = require("./config/environment");
const chats = require("./data/data");
const connectDB = require("./config/mongoose");
const colors = require("colors");
const userRoutes = require("./routes/users");
const chatRoutes = require("./routes/chats");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const messageRoutes = require("./routes/messages");

connectDB();
const app = express();

app.use(express.json()); // to acccept JSON Data

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });

const server = app.listen(env.port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${env.port}`.white.bold);
});

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("Connected to Socket.io");
});
