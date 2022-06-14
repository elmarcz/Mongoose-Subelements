const userSchema = require('../models/userSchema')

async function update() {
    await userSchema.findOneAndUpdate({ $ambitions: { time: 'time1', age: 'age1' } }, {
        'ambitions': {
            time: 'time2',
            age: 'age2'
        }
    })
}

module.exports = { update: update }