const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleSearchApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async error => {
    if (error) {
        console.log("issue connection to database")
    }
}
)
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});
const server = app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = server