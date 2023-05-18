yarn init -y
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn tsc --init => inicializa o typescript (cria o tsconfig)
yarn add ts-node-dev -D => (para possibilitar a sintaxe de import e export mais recente e o live reload igual nodemon)
yarn add express-async-errors => Tratar erros
yarn add cors
yarn add @types/cors -D
yarn add prisma => ORM
yarn add @prisma/client => ORM
npx prisma init => Inicializa
yarn add bcryptjs
yarn add @types/bcryptjs -D
yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
yarn add dotenv
yarn add multer
yarn add @types/multer -D
* npx prisma migrate dev --name update-types-status-draft  usei esse comando para alterar os tipos de status e draft de string para boolean

commits | Progressão
1: Comecando o projeto Criando as primeiras configurações;
2: Mensagem de erro e cors;
3: Configurando o postgre. Alterei .env DATABASE_URL para aceitar a conexão com o banco de dados;
4: criando migration;
5: yarn prisma migrate dev;
6: configurando controller e service;
7: Cadastrando user;
8: criptografando a senha;
9: Validação de login e descriptografia de senha;
10: Login e geração de token;
11: Criando middleware para autorizar usuário autenticado;
12: Detalhes do usuário;
13: Cadstrando categorias;
14: Listando categorias;
15: Inicio da rota produtos;
16: Configurando envio de imagem;
17: cadastrando produtos com imagens;
18: filtrando produtos por categoria;
19: Criando order pedido (Abrindo mesa);
20: Fechando um pedido; 
21: Adicionando itens ao pedido;
22: Retirando items da mesa;
23: Enviando pedido - Mudando draft (rascunho) de true para false;
24: listando pedidos que não estão em rascunho;
25: Detalhes do pedido;
