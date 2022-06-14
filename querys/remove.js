const userSchema = require('../models/userSchema')

async function remove(user, time, age) {
    await userSchema.findOneAndUpdate({ user: user }, {
        $pull: {
            'ambitions': {
                time: time,
                age: age
            }
        }
    })
    console.log('[DB] User deleted')
}

module.exports = { remove: remove }