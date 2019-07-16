const Ad = require('../models/ad')
const User = require('../models/User')
const Mail = require('../service/Mail')

class PurchaseController {
  async store( req, res){
      const { ad, content } = req.body

      const purchasedAd = await Ad.findById(ad).populate('author')
      const user = await User.findById(req.userId)

      await Mail.sendMail({
          from: '"Leandro" <leandrosouza0786@hotmail.com>',
          to: purchasedAd.author.email,
          subject: `Solicitação de compra: ${purchasedAd.title}`,
          html:  '<p>Teste</p>'
      })

      return res.send()
  }
}

module.exports = new PurchaseController()
