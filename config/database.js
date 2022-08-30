const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_CONECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
    .then(()=>console.log('conected to database successfully'))
    .catch(error=>console.log(error))