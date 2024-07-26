'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients').notNullable().onDelete('CASCADE')
      table.decimal('total_price', 10, 2).notNullable()
      table.timestamp('sale_date').defaultTo(this.fn.now()).notNullable()
      table.timestamps()
    })

    //Separando sales de sales_products para ter varios tipos de produtos no carrinho
    this.create('sales_products', (table) => {
      table.increments()
      table.integer('sale_id').unsigned().references('id').inTable('sales').notNullable().onDelete('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products').notNullable().onDelete('CASCADE')
      table.integer('quantity').unsigned().notNullable()
      table.decimal('unit_price', 10, 2).notNullable()
      table.decimal('total_price', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sales_products')
    this.drop('sales')
  }
}

module.exports = SalesSchema
