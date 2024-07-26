'use strict'

class ProductSeeder {
  async run () {
    await use('Database').table('products').insert([
      {
        name: 'Pikachu',
        description: 'Electric-type Pokémon',
        price: 100.00,
        stock_quantity: 10,
        type: 'Electric'
      },
      {
        name: 'Charizard',
        description: 'Fire/Flying-type Pokémon',
        price: 200.00,
        stock_quantity: 5,
        type: 'Fire/Flying'
      },
      {
        name: 'Bulbasaur',
        description: 'Grass/Poison-type Pokémon',
        price: 150.00,
        stock_quantity: 8,
        type: 'Grass/Poison'
      }
    ])
  }
}

module.exports = ProductSeeder
