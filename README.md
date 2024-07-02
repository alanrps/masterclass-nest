# Ignite 4.0 & MasterClass NestJS

## Comandos

### CLI NEST

```sh
nest -h # Ver as funcionalidades da CLI
nest new masterclass-nest
```

### Instalação do Prisma

```sh
npm i -D prisma
npx prisma init --datasource-provider SQLite
npx prisma migrate dev # Cria os modelos definidos no schema
npm i @prisma/client
npx prisma studio
```

### Instalação de Validações

```sh
npm install class-validator
npm install class-transformer
```

### Testes

```sh
npm run test:watch # Verifica modificações nos arquivos de teste
```

## Como Pensar no Desenvolvimento de Software (Design de Software)

### Princípios Gerais

- **Pensar antes de sair codando:** 
  - Pensar na aplicação desconexa do meio externo.
  - Fazer a aplicação independente do banco de dados e depois conectar como uma camada de persistência de dados.
  - Diminuir acoplamento.

### Domain-Driven Design (DDD)

- **Domínio, Conversação, Agregates, Bonded Contents**
- **Regras de Negócio**
- **Casos de Uso**
  - Diagramas de caso de uso.
  - Diagramas de sequência.
- **Value Object (DDD)**
  - Uma entidade não precisa ser uma tabela no banco de dados, ela pode ser várias.
  - Pode-se pegar uma propriedade e criar uma classe separada para fazer validações e formatações, evitando sujar o arquivo de notificações, pois é algo específico de uma propriedade.

### Infraestrutura

- **Camada Externa:**
  - Banco de dados.
  - Conexão com outras APIs.

### Estrutura de Casos de Uso

- **Casos de Uso -> Repositories -> BD**

### Banco de Dados em Memória

- **In Memory Database:**
  - Criar em memória para agilizar os testes.