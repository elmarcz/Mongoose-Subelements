const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    user: String,
    ambitions: [
        {
            time: String,
            age: String
        }
    ]
});

module.exports = model("User", userSchema);