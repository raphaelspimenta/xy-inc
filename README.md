# xy-inc
Projeto API XY-Inc

[![Dependency Status](https://img.shields.io/david/ealeksandrov/NodeAPI.svg)](https://david-dm.org/ealeksandrov/NodeAPI)
[![Dependency Status](https://img.shields.io/david/dev/ealeksandrov/NodeAPI.svg)](https://david-dm.org/ealeksandrov/NodeAPI)
[![License](https://img.shields.io/github/license/ealeksandrov/NodeAPI.svg)](LICENSE.md)

`XY-Inc` é um servidor de API Rest implementado em `Node.js` e `Express.js` com `Mongoose.js` para a integração com o banco de dados `MongoDB`. O projeto gerencia POIs (Pontos de Interesse) disponibilizando os seguintes serviços.
a) Cadastro de pontos de interesse: POST (/api/coordinate)
b) Listagem de todos os POIs cadastrados: GET (/api/coordinate)
c) Listagem POIs por proximidade: GET (/api/getnear)

## Instalando o projeto

### Manual
É necessário ter o [Node.js](https://nodejs.org) e [MongoDB](https://www.mongodb.com) instalados. Certificado destes requisitos, navegue até a pasta do projeto e execute o comando abaixo.
```sh
npm install
```


### Executando o servidor
```sh
node server
```

### Executando o serviço do Banco de Dados
```sh
Por favor, veja detalhes em [MongoDB](https://www.mongodb.com) para executar o serviço conforme o seus sistema operacional.
```
### Executando serviços da API
Utlizando qualquer cliente HTTP é possível acessar os serviços do projeto pelas seguintes URLs.
a) Cadastro de pontos de interesse: Executando um POST em http://localhost:3000/api/coordinate passando no body da requisição um objeto Coordinate (veja o arquivo models/insert_objects.json).
b) Listagem de todos os POIs cadastrados: GET http://localhost:3000/api/coordinate
c) Listagem dos POIs por proximidade: GET http://localhost:3000/api/getnear?lng=&lat=&dmax=? onde os parâmetros são inteiros representando respectivamente a longitude, latitude e distância máxima para busca.

### Executando testes automatizados
Para executar os testes automatizados, é necessário instalar o [MochaJS](https://mochajs.org/).
```sh
mocha
```

## Módulos utilizados
Abaixo são listados alguns dos módulos não padronizados utilizados no projeto:

* [express](https://www.npmjs.com/package/express)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [express-validator](https://github.com/express-validator/express-validator)
* [body-parser](https://www.npmjs.com/package/body-parser)

## Author
Criado e mantido por Raphael de Souza Pimenta ([@raphaelspimenta]).

## License
`NodeAPI` está disponível sobre a licença do MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais informações.