'use strict'

const Sale = use('App/Models/Sale')
const SalesProduct = use('App/Models/SalesProduct')

class SaleController {
  async index ({ response }) {
    try {
      const sales = await Sale.query().with('salesProducts.product').fetch()
      return response.json(sales)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao buscar vendas', erro: error.message })
    }
  }

  async show ({ params, response }) {
    try {
      const sale = await Sale.query().where('id', params.id).with('salesProducts.product').first()

      if (!sale) {
        return response.status(404).json({ mensagem: 'Venda não encontrada' })
      }

      return response.json(sale)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao buscar venda', erro: error.message })
    }
  }

  async store ({ request, response }) {
    const trx = await Sale.beginTransaction()

    try {
      const { client_id, products } = request.all()
      const sale = await Sale.create({ client_id, total_price: 0 }, trx)

      let totalPrice = 0

      for (let product of products) {
        const salesProduct = await SalesProduct.create({
          sale_id: sale.id,
          product_id: product.product_id,
          quantity: product.quantity,
          unit_price: product.unit_price,
          total_price: product.total_price
        }, trx)

        totalPrice += product.total_price
      }

      sale.total_price = totalPrice
      await sale.save(trx)

      await trx.commit()
      await sale.load('salesProducts.product')
      return response.status(201).json(sale)
    } catch (error) {
      await trx.rollback()
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao registrar venda', erro: error.message })
    }
  }

  async update ({ params, request, response }) {
    try {
      const data = request.only(['client_id', 'total_price', 'sale_date'])
      const sale = await Sale.find(params.id)

      if (!sale) {
        return response.status(404).json({ mensagem: 'Venda não encontrada' })
      }

      sale.merge(data)
      await sale.save()
      return response.json(sale)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao atualizar venda', erro: error.message })
    }
  }

  async delete ({ params, response }) {
    try {
      const sale = await Sale.find(params.id)

      if (!sale) {
        return response.status(404).json({ mensagem: 'Venda não encontrada' })
      }

      await sale.delete()
      return response.status(204).json(null)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao deletar venda', erro: error.message })
    }
  }

  // SalesProduct CRUD
  async storeProduct ({ request, response }) {
    try {
      const data = request.only(['sale_id', 'product_id', 'quantity', 'unit_price', 'total_price'])
      const salesProduct = await SalesProduct.create(data)
      return response.status(201).json(salesProduct)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao adicionar produto à venda', erro: error.message })
    }
  }

  async updateProduct ({ params, request, response }) {
    try {
      const data = request.only(['quantity', 'unit_price', 'total_price'])
      const salesProduct = await SalesProduct.find(params.id)

      if (!salesProduct) {
        return response.status(404).json({ mensagem: 'Produto da venda não encontrado' })
      }

      salesProduct.merge(data)
      await salesProduct.save()
      return response.json(salesProduct)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao atualizar produto da venda', erro: error.message })
    }
  }

  async deleteProduct ({ params, response }) {
    try {
      const salesProduct = await SalesProduct.find(params.id)

      if (!salesProduct) {
        return response.status(404).json({ mensagem: 'Produto da venda não encontrado' })
      }

      await salesProduct.delete()
      return response.status(204).json(null)
    } catch (error) {
      console.error(error)
      return response.status(500).json({ mensagem: 'Erro ao deletar produto da venda', erro: error.message })
    }
  }
}

module.exports = SaleController
