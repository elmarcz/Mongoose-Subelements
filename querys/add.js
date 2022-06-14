const userSchema = require('../models/userSchema')

async function add() {
    await userSchema.findOneAndUpdate({ user: 'Manolo' }, {
        $push: {
            'ambitions': {
                time: 'time1',
                age: 'age1'
            }
        }
    })
    console.log('[DB] User added')
}

module.exports = { add: add }