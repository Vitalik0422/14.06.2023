const genreModel = require('../models/genre.js')

const create = (data) => {

}

const getList = async () => {
    return genreList = await genreModel.getList();
}

const find = async (data) => {
    const result = await genreModel.find(data)
    return result;
}

const update = () => {

}

const remove = () => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.find = find
module.exports.update = update
module.exports.remove = remove