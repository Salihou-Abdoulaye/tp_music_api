const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const userRouter = require("./routes/userRoute");
const songRoute = require('./routes/songRoute');
const playlistRoute = require('./routes/playlistRoute');
const passportJWT = require('./middlewares/passportJWT')()

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/music");
  console.log(`[Database] is connected to MongoDB`);
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passportJWT.initialize())
app.get("/", (req, res) => {
    res.send('Welcome to Api - Music ')
});

app.use("/api/users", userRouter);
app.use("/api", songRoute);
app.use("/api",passportJWT.authenticate(), playlistRoute);
app.listen(port, () => console.log(`[SERVER] is running on : ${port}`));