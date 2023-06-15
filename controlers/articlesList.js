const articlesModel = require('../models/articles')
const authorCtrl = require('./author')
const genreCtrl= require('./genre')

const create = async (data) => {
}


const getList = async () => {
    const data = articlesModel.getList()
    return data;
}

const find = async (search) => {
    const queryAuthor = await authorCtrl.find(search)
    const authorId = queryAuthor._id.toString();
    const result = await articlesModel.find(authorId)
    return result
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