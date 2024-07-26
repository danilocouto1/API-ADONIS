'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressesSchema extends Schema {
  up () {
    this.create('addresses', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable().onDelete('CASCADE')
      table.string('street', 255).notNullable()
      table.integer('number', 10).notNullable()
      table.string('complement', 255).nullable() //Opicional
      table.string('city', 255).notNullable()
      table.string('state', 2).notNullable()
      table.integer('zip_code', 8).notNullable()
      table.string('country', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressesSchema
