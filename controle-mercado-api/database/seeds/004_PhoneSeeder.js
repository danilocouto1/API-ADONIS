'use strict'

class PhoneSeeder {
  async run () {
    await use('Database').table('phones').insert([
      { client_id: 1, phone_number: 123456789 },
      { client_id: 2, phone_number: 987654321 }
    ])
  }
}

module.exports = PhoneSeeder
