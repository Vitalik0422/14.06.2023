const authorModel = require('../models/author.js')
const create = (data) => {
    authorModel.create(data)

}

const getList = async () => {
    const authorList = await authorModel.getList();
    return authorList;
}

const update = () => {

}

const remove = () => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.update = update
module.exports.remove = remove