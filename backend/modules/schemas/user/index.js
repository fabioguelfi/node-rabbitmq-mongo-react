const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String, max: 50, min: 3, required: true },
    email: {  type: String, max: 50, min: 3, required: true  },
    password: {  type: String, max: 50, min: 3, required: true  },
    cnpj: { type: Number },
    cpf: { type: Number },
    inscricao_estadual: { type: Number }
})

module.exports = mongoose.model('User', UserSchema)