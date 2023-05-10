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

commits | Progressão
1: Comecando o projeto Criando as primeiras configurações;
2: Mensagem de erro e cors;
3: Configurando o postgre. Alterei .env DATABASE_URL para aceitar a conexão com o banco de dados;
4: criando migration;
