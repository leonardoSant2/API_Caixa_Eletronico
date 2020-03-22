const Conta = require("../models/Conta");

module.exports = {
    Query: {
        contasAtivas: () => Conta.find(), 
        saldo: (_, { numeroConta }) => Conta.findOne({ numeroConta })
            
        
    },

    Mutation: {
        criarConta: (_, { numeroConta, agencia, nomeCliente, saldo}) => Conta.create({ numeroConta, agencia, nomeCliente, saldo }),

        sacar: async (_, {numeroConta, saque}) => { 
                
                var { numeroConta, saldo } = await Conta.findOne({ numeroConta });        
          
                if (saldo < saque) {
                  throw new Error("Saldo insuficiente.")
                }
          
                const sacar = await Conta.findOneAndUpdate({ numeroConta }, { 
                 $inc: { saldo: - saque }
                });
                 
                return sacar;
            },

        depositar: async (_, {numeroConta, deposito}) => {      
            const depositar = await Conta.findOneAndUpdate({ numeroConta }, { 
              $inc: { saldo: deposito }
            });
            
            return depositar;
          },
    }

};


