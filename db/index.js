const mongoose = require ('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lamdRecipesDB';

mongoose.connect(MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
    console.log('successfully connected')
}).catch((err) => {
    console.error('connect error',e.message);
})

const db = mongoose.connection

module.exports = db
