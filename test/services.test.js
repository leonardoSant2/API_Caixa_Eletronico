const request = require('supertest');
const services = require('../src/services/resolvers');


describe('Query', () => {
  it ('A resposta deve retornar todas as contas ativas', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        query : {
          contasAtivas : {
            nomeCliente,  
            numeroConta,
            agencia,
            saldo,
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Retorna uma conta específica', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        query : {
          numeroConta : 1212
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Simula a consulta do saldo', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        query : {
          saldo : {
            numeroConta:1212,
          }
        }
      });

    expect(response).toBeTruthy();
  });
});

describe('Mutations', () => {
  it ('Criação de uma nova conta', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        mutation : {
            criarConta: {
            numeroConta:5555,
            saldo:1000
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Simula um depósito', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        mutation : {
          depositar : {
            conta:5555,
            valor:200
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Simula o saque em uma conta', async () => {
    const response = await request(services)
      .post('/test')
      .send({
        mutation : {
          sacar : {
            numeroConta:5555,
            valor:300
          }
        }
      });

    expect(response).toBeTruthy();
  });
});