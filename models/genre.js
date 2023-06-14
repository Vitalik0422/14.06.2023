const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/author')

const {Schema} = mongoose;

const schema = new Schema({
    genre:{type:String},
})
const model = mongoose.model('genres', schema)




const create = (data) => {
}


const getList = async () => {
    const result = await model.find();
    return result;
}
const search = async (data) => {

}

const update = (id, data) => {

}

const remove = (id, data) => {

}

module.exports.create = create
module.exports.getList = getList
module.exports.search = search
module.exports.update = update
module.exports.remove = remove
