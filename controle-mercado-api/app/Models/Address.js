'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
  static get table () {
    return 'addresses'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['client_id', 'street', 'number', 'complement', 'city', 'state', 'zip_code', 'country']
  }

  client () {
    return this.belongsTo('App/Models/Client', 'client_id', 'id')
  }
}

module.exports = Address
