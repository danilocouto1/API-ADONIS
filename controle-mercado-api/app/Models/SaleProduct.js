'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SalesProduct extends Model {
  static get table () {
    return 'sales_products'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['sale_id', 'product_id', 'quantity', 'unit_price', 'total_price']
  }

  sale () {
    return this.belongsTo('App/Models/Sale', 'sale_id', 'id')
  }

  product () {
    return this.belongsTo('App/Models/Product', 'product_id', 'id')
  }
}

module.exports = SalesProduct
