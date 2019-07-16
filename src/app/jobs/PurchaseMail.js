const mail = require('../service/Mail')

class PurchasMail {
  get key() {
    return 'PurchaseMail'
  }

  async handle(job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Leandro" <leandrosouza0786@hotmail.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${purchasedAd.title}`,
      template: 'purchase',
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchasMail()
