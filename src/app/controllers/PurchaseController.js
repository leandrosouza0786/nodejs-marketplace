const Ad = require('../models/ad')
const User = require('../models/User')
const Mail = require('../service/Mail')
const Queue = require('../service/Queue')

class PurchaseController {
  async store( req, res){
      const { ad, content } = req.body

      const purchasedAd = await Ad.findById(ad).populate('author')
      const user = await User.findById(req.userId)

      Queue.create(PurchaseMail.key, {
        ad: purchasedAd,
        user,
        conent
      }).save()

      return res.send()
  }
}

module.exports = new PurchaseController()
