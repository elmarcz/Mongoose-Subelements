const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/subelements', {
    useNewUrlParser: true
})
    .then(console.log("[DB] Connected to mongodb"))
    .catch((err) => console.log("[DB] Db error " + err));