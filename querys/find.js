const userSchema = require('../models/userSchema')

async function find(time, age) {
    return await userSchema.findOne({ $ambitions: [{ time: time, age: age }] })
}

module.exports = { find: find }