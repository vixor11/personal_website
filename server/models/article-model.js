const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        title: { type: String, required: true },
        main_text: { type: String, required: true },
        date_time_published: {type: Date, default: Date.now, required: true}, 
        last_edited: {type: Date, default: Date.now, required: true}, 
        hidden: { type: Boolean, required: true }
    }
)

module.exports = mongoose.model('articles', Article)