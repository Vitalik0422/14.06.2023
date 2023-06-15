const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/author')

const {Schema} = mongoose;

const schema = new Schema({
    author:{type:String},
})
const model = mongoose.model('author', schema)


const create = (data) => {
    model.create(data)
}

const getList = async () => {
    const authorList = await model.find()
    return authorList;
}
const find = async (data) => {
    regex = new RegExp(data, 'i');
    const author = await model.findOne({author: { $regex: regex }})
    console.log('modelAuthor:',author);
    return author;
}

const update = (id, data) => {

}

const remove = (id, data) => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.find = find
module.exports.update = update
module.exports.remove = remove