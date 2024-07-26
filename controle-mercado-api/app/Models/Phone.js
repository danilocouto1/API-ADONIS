'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Phone extends Model {
  static get table () {
    return 'phones'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['client_id', 'phone_number']
  }

  client () {
    return this.belongsTo('App/Models/Client', 'client_id', 'id')
  }
}

module.exports = Phone
