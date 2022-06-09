const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

const createItem = async (req, res) => {
    try {
        const item = await new LambRecipe(req.body)
        await item.save()
        return res.status(200).send({
            item,
        })

    }catch(err){
        return res.status(500).json({error: error.message})
    }
}

const getAllItems = async (req,res) => {
    try {
        const items = await LambRecipe.find()
        return res.status(200).json({items})

    }catch(err){
        return res.status(500).send(err.message)
    }
}
const getAllCountry = async (req,res) => {
    try {
        const items = await OriginCountry.find()
        return res.status(200).json({items})

    }catch(err){
        return res.status(500).send(err.message)
    }
}
const getItemById = async (req,res) => {
    try {
        const { id } = req.params;
        const item = await LambRecipe.findById(id)
        if  (item) {
            return res.status(200).json({item})
        }

    }catch(err){
        return res.status(500).send('item with given id does not exist')
    }
}
const getCountryById = async (req,res) => {
    try {
        const { id } = req.params;
        const item = await OriginCountry.findById(id)
        if  (item) {
            return res.status(200).json({item})
        }

    }catch(err){
        return res.status(500).send('item with given id does not exist')
    }
}
const updateItem = async (req,res) => {
    try {
        const { id } = req.params
        LambRecipe.findByIdAndUpdate(id, req.body, {new:true}, (err, item) => {
            if (err) {
                return res.status(500).send(err)
            }
            if (!item) {
                res.status(500).send('item not found')
            }
        })

    }catch(err){
        return res.status(500).send(err.message)
    }
}
const deleteItem = async (req,res) => {
    try {
        const { id } = req.params.id
        const deleted = await LambRecipe.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('item deleted')
        }
        throw new Error('item not found')

    }catch(err){
        return res.status(500).send(err.message)
    }
}

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
    getAllCountry,
    getCountryById 
}