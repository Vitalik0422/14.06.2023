const express = require('express')
const router = express.Router()
const articleListCtrl = require('../controlers/articlesList')

router.get('/articleslist', (req,res)=> {
    res.render('articlesList')
})

router.get('/articleloadlist', async (req,res) => {
    const result = await articleListCtrl.getList()
    res.json(result)
})

module.exports = router