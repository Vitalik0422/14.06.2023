const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/author')

const {Schema} = mongoose

const schema = new Schema({
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'author'}],
    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'genres'}],
    nameArticle: {
        type: String,
        minLength: 3},
    textArticle: {
        type: String,
        minLength: 3},

})
const model = mongoose.model('article', schema);

const create = (data) => {
    model.create(data)
}

const getList = async () => {
    const data = await model
    .find()
    .populate('author')
    .populate('genre')
    return data;
}

const update = (id, data) => {

}

const remove = (id, data) => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.update = update
module.exports.remove = remove