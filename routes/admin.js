const express = require('express')
const router = express.Router()
const multer  = require ('multer') 
const upload  =  multer ( {  dest : 'uploads/'  } )
const authorCtrl = require('../controlers/author')



router.get('/author', (req,res) => {
    res.render('index')
})

router.post('/createAuthor', upload.none(), (req,res) => {
    authorCtrl.create(req.body);
})

router.get('/authorLoad', async (req,res) => {
    const data = await authorCtrl.getList();
    res.json(data)
})

module.exports = router;