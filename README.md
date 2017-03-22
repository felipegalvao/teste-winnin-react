# Teste Winnin - Subreddit Posts Interface React

Este projeto busca posts no Subreddit do ReactJS através da API do Reddit e os exibe, divididos em 
"Hot", "New" e "Rising". O subreddit pode ser alterado no arquivo de entrada "app/app.jsx"

Para instalar as dependências necessárias, clonar o repositório e executar "npm install"

Ferramentas utilizadas:

- Axios para fazer o request para a API e retornar os posts
- Testes: Jest, Enzyme, Chai e Sinon. Para rodá-los, executar "npm test"
- Webpack foi utilizado para criar o bundle do código
- Babel utilizado através do Webpack para transpilar o Javascript
- React-Bootstrap para botões
- MomentJS para tratamento da data conforme exibido na linha do post

Para rodar o projeto localmente, após instalar as dependências, executar "node server.js" e 
acessar "http://localhost:3000"

## English description

This project gets posts from the ReactJS subreddit through Reddit's API and show them, divided 
between "Hot", "New" and "Rising". The subreddit can be changed in the entry file: "app/app.jsx"

To install the required dependencies, clone the repo and run "npm install"

Tools used:

- Axios, to make the request to the API and get the posts
- Tests: Jest, Enzyme, Chai and Sinon. To run the tests, "npm test"
- Webpack was used to bundle the code
- Babel used through Webpack to transpile
- React-Bootstrap for buttons
- MomentJS to handle dates, as shown in the post row

To run the project locally, after installing the dependencies, run "node server.js" and access 
"http://localhost:3000"