const mongoose = require('mongoose');


const ContaSchema = new mongoose.Schema({

    numeroConta: {
        type: Number, 
        required: true,
        integer: true,
        unique: true
    },
    agencia: {
        type: Number, 
        required: true,
        integer: true,
    },
    nomeCliente: {
        type: String,
        required: true
    },
    saldo: {
        type: Number, 
        required: true,
        integer: true,
        
    }
});

module.exports = mongoose.model('Conta', ContaSchema);