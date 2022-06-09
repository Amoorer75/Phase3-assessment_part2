const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OriginCountry = require("./originCountry");

const lambRecipes = new Schema(
    {
        title: { type: String, required: true },
        origin_country: { type: String},
        ingredients: { type: String, required: true },
        picture: { type: String, required: true },
    },    
    {timestamp:true}
)

module.exports = mongoose.model('lambRecipes', lambRecipes)


