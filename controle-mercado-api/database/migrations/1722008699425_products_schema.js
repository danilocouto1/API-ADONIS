'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.text('description').nullable() //Opicional
      table.decimal('price', 10, 2).unsigned().notNullable()
      table.integer('stock_quantity').unsigned().notNullable()
      table.string('type', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
