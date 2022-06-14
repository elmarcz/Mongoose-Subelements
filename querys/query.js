const add = require('./add');
const find = require('./find');
const remove = require('./remove');
const updateAll = require('./updateAll');

const query = {
    add: add,
    find: find,
    remove: remove,
    updateAll: updateAll
}

module.exports = query;