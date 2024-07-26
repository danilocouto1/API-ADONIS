'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhonesSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable().onDelete('CASCADE')
      table.integer('phone_number', 15).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhonesSchema
