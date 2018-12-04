![1200px-star_wars2 svg](https://user-images.githubusercontent.com/43390621/48627866-d905b500-e99c-11e8-969c-515fd8bdcc41.png)


# REST API em Node.js e Express.js - Cadastro e manipulação de planetas Star Wars em API SWAPI



Nesta aplicação foram implementadas as seguintes fucionalidades: adicionar planetas, listar planetas, buscar por nome e Id, remover planeta. Foi feito em Node usando a arquitetura REST, consome a API Swapi, o qual neste caso consultou-se apenas o número de aparições em filmes de cada planeta existente no universo Star Wars, caso o planeta não exista neste universo será cadastrado com zero aparições


## Tecnologias Utilizadas

- Node.js 10.13.0

- Postman 6.5.2

- MongoDB 4.0.4

## Dependências

- Express 4.16.4

- Mongoose 5.3.12

- Body-Parser 1.18.3

- Nodemon (não é pré-requisito, mas facilita o uso)


## Guia 

1. É necessário clonar o repositório com o comando `git clone https://github.com/brunoalvaress/b2wdigital-testebackend-bruno.git` 
2. Entrar no diretório do projeto com `cd b2wdigital-testebackend-bruno (para windows)`
3. Instalar todas as dependências utilizando `npm install dependencies`
4. Recomendo instalar o nodemon, utilizando `npm install nodemon`
5. Após isso rodar a aplicação utilizando `nodemon src/index.js`

## Arquitetura REST

A seguir está uma configuração genérica de local host na porta 3000:

- Listagem de planetas - GET: http://localhost:3000/b2w/planetas/

   . Em caso de sucesso retorna todos os planetas já cadastrados no banco de dados, cada planeta no formato JSON, contendo nome, clima, terreno e número de aparições.
   
- Adicionar planeta - POST: http://localhost:3000/b2w/planetas/adicionar 
  
  . Adiciona um planeta ao banco de dados, sendo necessário inserir o nome, clima e terreno. O Id é gerado automaticamente, e o número de aparições também é gerado consumindo os dados da API Swapi. Caso o planeta não esteja contido no universo Star Wars, ele será cadastrado como tendo 0 aparições.
  
- Buscar planeta por Id - GET: http://localhost:3000/b2w/planetas/id/{inserir-id-aqui}

  . Utiliza o Id gerado automaticamente quando o planeta é adicionado ao banco de dados. Retorna o arquivo no formato JSON com sucesso caso exista. Para essa busca é necessário inserir o Id após /id/.
  
- Buscar planeta por Nome - GET: http://localhost:3000/b2w/planetas/nome/{inserir-nome-aqui}

   . Utiliza o nome do planeta cadastrado, segue a mesma metodologia da busca pelo Id. Para essa busca é necessário inserir o Nome após /nome/.
   
- Deletar um planeta por Id - DELETE: http://localhost:3000/b2w/planetas/id/deletar/{inserir-id-aqui}

   . Remove o planeta utilizando o Id que foi gerado automaticamente, utilizando o método DELETE. 

## Testes

Foram totalmente realizados no ambiente automatizado do Postman, onde foi criado uma collection com 5 testes, comprovando o sucesso de cada funcionalidade. Os testes que foram feitos nesse caso podem ser vistos na figura abaixo, logo na aba a esquerda. O Postman é uma ferramenta extremamente útil para se testar manualmente ou automatizar os testes de qualquer API REST.

![testes](https://user-images.githubusercontent.com/43390621/48627815-b2e01500-e99c-11e8-8a28-819e35f1aad9.jpg)

## Créditos

Essa API foi desenvolvida e documentada por Bruno Alvares de Miranda, no dia 15/11/2018.
