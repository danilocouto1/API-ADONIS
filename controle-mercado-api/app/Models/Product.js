'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static get table () {
    return 'products'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['name', 'description', 'price', 'stock_quantity', 'type']
  }

  sales () {
    return this.belongsToMany('App/Models/Sale').pivotTable('sales_products')
  }
}

module.exports = Product
