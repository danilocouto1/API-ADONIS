'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Client extends Model {
  static get table () {
    return 'clients'
  }

  static get createdAtColumn () {
    return 'created_at'
  }

  static get updatedAtColumn () {
    return 'updated_at'
  }

  static get fillable () {
    return ['cpf', 'nome']
  }

  addresses () {
    return this.hasMany('App/Models/Address', 'id', 'client_id')
  }

  phones () {
    return this.hasMany('App/Models/Phone', 'id', 'client_id')
  }

  sales () {
    return this.hasMany('App/Models/Sale', 'id', 'client_id')
  }
}

module.exports = Client
