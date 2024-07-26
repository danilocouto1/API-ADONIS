'use strict'

const Client = use('App/Models/Client')
const Address = use('App/Models/Address')
const Phone = use('App/Models/Phone')

class ClientController {

  // Client CRUD
  async indexClients ({ response }) {
    const clients = await Client.all()
    return response.json(clients)
  }

  async showClient ({ params, response }) {
    const client = await Client.find(params.id)

    if (!client) {
      return response.status(404).json({ mensagem: 'Cliente não encontrado' })
    }

    return response.json(client)
  }

  async storeClient ({ request, response }) {
    const data = request.only(['cpf', 'nome'])
    const client = await Client.create(data)
    return response.status(201).json(client)
  }

  async updateClient ({ params, request, response }) {
    const data = request.only(['cpf', 'nome'])
    const client = await Client.find(params.id)

    if (!client) {
      return response.status(404).json({ mensagem: 'Cliente não encontrado' })
    }

    client.merge(data)
    await client.save()
    return response.json(client)
  }

  async deleteClient ({ params, response }) {
    const client = await Client.find(params.id)

    if (!client) {
      return response.status(404).json({ mensagem: 'Cliente não encontrado' })
    }

    await client.delete()
    return response.status(204).json(null)
  }

  // Address CRUD
  async indexAddresses ({ response }) {
    const addresses = await Address.all()
    return response.json(addresses)
  }

  async showAddress ({ params, response }) {
    const address = await Address.find(params.id)

    if (!address) {
      return response.status(404).json({ mensagem: 'Endereço não encontrado' })
    }

    return response.json(address)
  }

  async storeAddress ({ request, response }) {
    const data = request.only(['client_id', 'street', 'number', 'complement', 'city', 'state', 'zip_code', 'country'])
    const address = await Address.create(data)
    return response.status(201).json(address)
  }

  async updateAddress ({ params, request, response }) {
    const data = request.only(['street', 'number', 'complement', 'city', 'state', 'zip_code', 'country'])
    const address = await Address.find(params.id)

    if (!address) {
      return response.status(404).json({ mensagem: 'Endereço não encontrado' })
    }

    address.merge(data)
    await address.save()
    return response.json(address)
  }

  async deleteAddress ({ params, response }) {
    const address = await Address.find(params.id)

    if (!address) {
      return response.status(404).json({ mensagem: 'Endereço não encontrado' })
    }

    await address.delete()
    return response.status(204).json(null)
  }

  async showAddressesByClientId ({ params, response }) {
    const addresses = await Address.query().where('client_id', params.client_id).fetch()

    if (addresses.rows.length === 0) {
      return response.status(404).json({ mensagem: 'Endereços não encontrados para o cliente' })
    }

    return response.json(addresses)
  }

  async updateAddressByClientId ({ params, request, response }) {
    const data = request.only(['street', 'number', 'complement', 'city', 'state', 'zip_code', 'country'])
    const address = await Address.query().where('client_id', params.client_id).first()

    if (!address) {
      return response.status(404).json({ mensagem: 'Endereço não encontrado para o cliente' })
    }

    address.merge(data)
    await address.save()
    return response.json(address)
  }

  // Phone CRUD
  async indexPhones ({ response }) {
    const phones = await Phone.all()
    return response.json(phones)
  }

  async showPhone ({ params, response }) {
    const phone = await Phone.find(params.id)

    if (!phone) {
      return response.status(404).json({ mensagem: 'Telefone não encontrado' })
    }

    return response.json(phone)
  }

  async storePhone ({ request, response }) {
    const data = request.only(['client_id', 'phone_number'])
    const phone = await Phone.create(data)
    return response.status(201).json(phone)
  }

  async updatePhone ({ params, request, response }) {
    const data = request.only(['phone_number'])
    const phone = await Phone.find(params.id)

    if (!phone) {
      return response.status(404).json({ mensagem: 'Telefone não encontrado' })
    }

    phone.merge(data)
    await phone.save()
    return response.json(phone)
  }

  async deletePhone ({ params, response }) {
    const phone = await Phone.find(params.id)

    if (!phone) {
      return response.status(404).json({ mensagem: 'Telefone não encontrado' })
    }

    await phone.delete()
    return response.status(204).json(null)
  }

  async showPhonesByClientId ({ params, response }) {
    const phones = await Phone.query().where('client_id', params.client_id).fetch()

    if (phones.rows.length === 0) {
      return response.status(404).json({ mensagem: 'Telefones não encontrados para o cliente' })
    }

    return response.json(phones)
  }

  async updatePhoneByClientId ({ params, request, response }) {
    const data = request.only(['phone_number'])
    const phone = await Phone.query().where('client_id', params.client_id).first()

    if (!phone) {
      return response.status(404).json({ mensagem: 'Telefone não encontrado para o cliente' })
    }

    phone.merge(data)
    await phone.save()
    return response.json(phone)
  }
}

module.exports = ClientController
