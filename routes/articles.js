const express = require('express')
const router = express.Router();
const multer  = require ('multer') 
const upload  =  multer ( {  dest : 'uploads/'  } )
const authorCtrl = require('../controlers/author')
const articleCtrl = require('../controlers/articles');
const genreCtrl = require('../controlers/genre')

router.get('/articles', (req,res)=> {
    res.render('articles')
})

router.get('/findAuthor', async (req,res)=> {
    const result = await authorCtrl.getList();
    res.json(result)
})
router.get('/listgenre', async(req,res) => {
    const result = await genreCtrl.getList();
    res.json(result)
})

router.post('/createArticle', upload.none(), (req,res) => {
    console.log(req.body);
    articleCtrl.create(req.body)
})


module.exports = router;