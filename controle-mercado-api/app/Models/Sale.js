'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sale extends Model {
  static get table () {
    return 'sales'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['client_id', 'total_price', 'sale_date']
  }

  client () {
    return this.belongsTo('App/Models/Client', 'client_id', 'id')
  }

  sales () {
    return this.hasMany('App/Models/SalesProduct', 'id', 'sale_id')
  }
}

module.exports = Sale
