API Caixa Eletrônico

Desenvolvido com:
GraphQL
NodeJs

Banco de Dados: MongoDB

Para executar o projeto, siga os seguintes passos:

1 - Faça o clone do repositório com o comando git clone ou o download do zip do repositório.

2 - Acesse o diretório raiz do projeto e execute o comando npm install para baixar as dependências.

3 - Execute o comando node src/server.js para iniciar o servidor.

4 - Os recursos estarão disponíves em http://localhost:4000/.

5 - Para testar o projeto, crie uma nova aba para cada query no GraphQL Playground coforme os exemplos abaixo:

  5.1 - mutation { 
          depositar(numeroConta:1212, deposito:100) {
            numeroConta 
           saldo 
         } 
      }

  5.2 - mutation {
          sacar(numeroConta: 1212, saque: 100) {
          numeroConta
          saldo
        }
     }

  5.3 - query {
          saldo(numeroConta: 1212) {
          saldo
        }  
      }
