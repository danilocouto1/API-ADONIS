'use strict'

class AddressSeeder {
  async run () {
    await use('Database').table('addresses').insert([
      {
        client_id: 1,
        street: 'Pallet Town',
        number: 1,
        complement: null,
        city: 'Pallet Town',
        state: 'CA',
        zip_code: 12345,
        country: 'Kanto'
      },
      {
        client_id: 2,
        street: 'Cerulean City',
        number: 10,
        complement: 'Near the Water',
        city: 'Cerulean City',
        state: 'CA',
        zip_code: 67890,
        country: 'Kanto'
      }
    ])
  }
}

module.exports = AddressSeeder
