const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const router = require("./routes/route");

// read the data json
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(router);
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running at : http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.status(200).json({
        statusCode: 200,
        message: "Shoefy Website"
    });
});