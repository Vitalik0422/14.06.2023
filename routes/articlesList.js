const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload  =  multer ( {  dest : 'uploads/'  } )
const articleListCtrl = require('../controlers/articlesList')

router.get('/articleslist', (req,res)=> {
    res.render('articlesList')
})

router.get('/articleloadlist', async (req,res) => {
    const result = await articleListCtrl.getList()
    res.json(result)
})

router.post('/searchArticle', upload.none(), async(req,res) => {
    console.log(req.body.search);
    const result = await articleListCtrl.find(req.body.search)
    console.log(result);
    res.json(result)
})

module.exports = router