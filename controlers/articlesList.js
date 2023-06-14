const articlesModel = require('../models/articles')

const create = async (data) => {
}


const getList = async () => {
    const data = articlesModel.getList()
    return data;
}

const update = () => {

}

const remove = () => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.update = update
module.exports.remove = remove