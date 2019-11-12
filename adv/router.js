const {Router} = require('express')
const Adv= require('./model')

const router = new Router()

//add Adv
router.post('/advertisement', (req,res,next) => {
    Adv.create(req.body)
    .then(advertisement => res.send(advertisement))
    .catch(next)
})

//get all advertisements
router.get('/advertisement', (req, res, next) => {
    const limit = req.query.limit || 10
    const offset = req.query.offset || 0
  
    Adv.findAndCountAll({ limit, offset })
      .then(result => res.send({ advertisements: result.rows, total: result.count }))
      .catch(error => next(error))
  })

//get advertisement by id
router.get('/advertisement/:id', (req,res,next) => {
    Adv.findByPk(req.params.id)
    .then(advertisement => res.send(advertisement))
    .catch(next)
})
// //update advertisement by id
// router.put('/advertisement/:id', (req,res,next) => {
//     Adv.findByPk(req.params.id)
//     .then(advertisement => advertisement.update(req.body))
//     .then(advertisement => res.send(advertisement))
//     .catch(next)
// })


// //Delete advertisement by id
// router.delete('/event/:id', (req,res,next) => {
//     Adv.findByPk(req.params.id)
//     .then(advertisement => advertisement.destroy())
//     .then ( adv => {
//       if(!adv){
//         res.send('advertisement not found!')
//       } else {
//         res.send('advertisement has been deleted succefully!')
//       }
//     })
//     .catch(next)
// })



module.exports = router 