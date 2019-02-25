const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String, max: 50, min: 3, required: true },
    last_name: { type: String, max: 50, min: 3, required: true },
    cnpj: { type: Number },
    cpf: { type: Number }
})

module.exports = mongoose.model('User', UserSchema)