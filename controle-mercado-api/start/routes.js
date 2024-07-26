'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('signup', 'UserController.signup')
Route.post('login', 'UserController.login')

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


