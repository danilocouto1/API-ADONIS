```markdown
# Projeto AdonisJS

Este é um projeto desenvolvido com o framework AdonisJS. Siga os passos abaixo para configurar e iniciar o projeto.

## Pré-requisitos

- Node.js
- npm ou yarn
- AdonisJS CLI

## Instalação

1. Clone o repositório:

   ```sh
   git clone (https://github.com/danilocouto1/API-ADONIS)
   cd controle-mercado-api
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

   ou

   ```sh
   yarn install
   ```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:

   ```sh
   cp .env.example .env
   ```

2. Edite o arquivo `.env` com as configurações do seu banco de dados e outras variáveis de ambiente necessárias.

## Executando as Migrations e Seeds

1. Execute as migrations para criar as tabelas no banco de dados:

   ```sh
   node ace migration:run
   ```

2. Execute as seeds para popular o banco de dados com dados iniciais:

   ```sh
   node ace seed
   ```

## Iniciando o Servidor

1. Inicie o servidor:

   ```sh
   node ace serve --dev
   ```

2. O servidor estará rodando em `http://localhost:3333`.

## Rotas da API

### Autenticação

- `POST /signup`: Cadastro de usuários.
- `POST /login`: Login de usuários.

### Grupo de Rotas Protegidas (requer autenticação)


![Fluxograma]([https://uploaddeimagens.com.br/imagens/YS0d8cM](https://uploaddeimagens.com.br/images/004/815/759/original/Fluxograma.png?1722043049))


```sh
Route.group(() => {
  // Client
  Route.get('clients', 'ClientController.indexClients')
  Route.get('clients/:id', 'ClientController.showClient')
  Route.post('clients', 'ClientController.storeClient')
  Route.put('clients/:id', 'ClientController.updateClient')
  Route.delete('clients/:id', 'ClientController.deleteClient')

  // Address
  Route.get('addresses', 'ClientController.indexAddresses')
  Route.get('addresses/:id', 'ClientController.showAddress')
  Route.post('addresses', 'ClientController.storeAddress')
  Route.put('addresses/:id', 'ClientController.updateAddress')
  Route.delete('addresses/:id', 'ClientController.deleteAddress')
  Route.get('clients/:client_id/addresses', 'ClientController.showAddressesByClientId')
  Route.put('clients/:client_id/addresses', 'ClientController.updateAddressByClientId')

  // Phone
  Route.get('phones', 'ClientController.indexPhones')
  Route.get('phones/:id', 'ClientController.showPhone')
  Route.post('phones', 'ClientController.storePhone')
  Route.put('phones/:id', 'ClientController.updatePhone')
  Route.delete('phones/:id', 'ClientController.deletePhone')
  Route.get('clients/:client_id/phones', 'ClientController.showPhonesByClientId')
  Route.put('clients/:client_id/phones', 'ClientController.updatePhoneByClientId')

  // Product
  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')
  Route.post('products', 'ProductController.store')
  Route.put('products/:id', 'ProductController.update')
  Route.delete('products/:id', 'ProductController.delete')

  // Sale and SalesProduct
  Route.get('sales', 'SaleController.index')
  Route.get('sales/:id', 'SaleController.show')
  Route.post('sales', 'SaleController.store')
  Route.put('sales/:id', 'SaleController.update')
  Route.delete('sales/:id', 'SaleController.delete')

  Route.post('sales-products', 'SaleController.storeProduct')
  Route.put('sales-products/:id', 'SaleController.updateProduct')
  Route.delete('sales-products/:id', 'SaleController.deleteProduct')
}).middleware(['auth'])
```

### Client

- `GET /clients`: Lista todos os clientes.
- `GET /clients/:id`: Mostra um cliente específico.
- `POST /clients`: Adiciona um novo cliente.
- `PUT /clients/:id`: Atualiza um cliente existente.
- `DELETE /clients/:id`: Remove um cliente.

### Address

- `GET /addresses`: Lista todos os endereços.
- `GET /addresses/:id`: Mostra um endereço específico.
- `POST /addresses`: Adiciona um novo endereço.
- `PUT /addresses/:id`: Atualiza um endereço existente.
- `DELETE /addresses/:id`: Remove um endereço.
- `GET /clients/:client_id/addresses`: Mostra endereços de um cliente específico.
- `PUT /clients/:client_id/addresses`: Atualiza endereços de um cliente específico.

### Phone

- `GET /phones`: Lista todos os telefones.
- `GET /phones/:id`: Mostra um telefone específico.
- `POST /phones`: Adiciona um novo telefone.
- `PUT /phones/:id`: Atualiza um telefone existente.
- `DELETE /phones/:id`: Remove um telefone.
- `GET /clients/:client_id/phones`: Mostra telefones de um cliente específico.
- `PUT /clients/:client_id/phones`: Atualiza telefones de um cliente específico.

### Product

- `GET /products`: Lista todos os produtos.
- `GET /products/:id`: Mostra um produto específico.
- `POST /products`: Adiciona um novo produto.
- `PUT /products/:id`: Atualiza um produto existente.
- `DELETE /products/:id`: Remove um produto.

### Sale and SalesProduct

- `GET /sales`: Lista todas as vendas.
- `GET /sales/:id`: Mostra uma venda específica.
- `POST /sales`: Adiciona uma nova venda.
- `PUT /sales/:id`: Atualiza uma venda existente.
- `DELETE /sales/:id`: Remove uma venda.
- `POST /sales-products`: Adiciona um novo produto a uma venda.
- `PUT /sales-products/:id`: Atualiza um produto de uma venda existente.
- `DELETE /sales-products/:id`: Remove um produto de uma venda.
```
