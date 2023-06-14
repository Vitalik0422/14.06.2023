const authorModel = require('../models/author')
const articlesModel = require('../models/articles')

const create = async (data) => {
    articlesModel.create(data)
}

const getList = async () => {

}

const update = () => {

}

const remove = () => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.update = update
module.exports.remove = remove