![1200px-star_wars2 svg](https://user-images.githubusercontent.com/43390621/48627866-d905b500-e99c-11e8-969c-515fd8bdcc41.png)


# Desafio backend BW2 Digital - Star Wars API

Aplicação desenvolvida para a B2W Digital, baseada no universo de Star Wars.

Nesta aplicação foram implementadas as seguintes fucionalidades: adicionar planetas, listar planetas, buscar por nome e Id, remover planeta.

Foi feito totalmente em Node usando a arquitetura REST, e consome a API Swapi, o qual neste caso devolve o número de aparições em filmes de cada planeta existente no universo Star Wars, caso o planeta não exista neste universo retorna zero aparições.

# Tecnologias Utilizadas

- Node.js 10.13.0

- Postman v6.5.2

- MongoDB 4.0.4

# Dependências

- Express 4.16.4

- Mongoose 5.3.12

- Body-Parser 1.18.3

- Nodemon (não é pré-requisito)


# Guia 

1. É necessário clonar o repositório com o comando $git clone https://github.com/brunoalvaress/b2wdigital-testebackend-bruno.git 
2. Entrar no diretório do clone com $cd b2wdigital-testebackend-bruno (para windows)
3. Instalar todas as dependências utilizando npm install dependencies, e recomendo instalar o nodemon, utilizando npm install nodemon
4. Após isso rodar a aplicação utilizando $nodemon src/index.js

# Arquitetura REST

A seguir está uma configuração genérica de local host na porta 3000:

- Listagem de planetas - GET: http://localhost:3000/b2w/planetas/
- Adicionar planeta - POST: http://localhost:3000/b2w/planetas/adicionar (necessita de nome, clima e terreno, o número de aparições é automaticamente preenchido ao consumir a api swapi)
- Buscar planeta por Id - GET: http://localhost:3000/b2w/planetas/id/{inserir-id-aqui}
- Buscar planeta por Nome - GET: http://localhost:3000/b2w/planetas/nome/{inserir-nome-aqui}
- Deletar um planeta por Id - DELETE: http://localhost:3000/b2w/planetas/id/deletar/{inserir-id-aqui}

# TESTES

Foram totalmente realizados no ambiente automatizado do Postman, onde foi criado uma collection com 5 testes, comprovando o sucesso de cada funcionalidade.

![testes](https://user-images.githubusercontent.com/43390621/48627815-b2e01500-e99c-11e8-8a28-819e35f1aad9.jpg)
