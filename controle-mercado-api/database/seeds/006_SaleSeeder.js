'use strict'

class SaleSeeder {
  async run () {
    await use('Database').table('sales').insert([
      {
        client_id: 1,
        total_price: 300.00,
        sale_date: new Date()
      }
    ])

    await use('Database').table('sales_products').insert([
      {
        sale_id: 1,
        product_id: 1,
        quantity: 1,
        unit_price: 100.00,
        total_price: 100.00
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 1,
        unit_price: 200.00,
        total_price: 200.00
      }
    ])
  }
}

module.exports = SaleSeeder
