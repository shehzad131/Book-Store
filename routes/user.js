var express = require('express');
var router = express.Router();
var bookHelpers = require('../helpers/book-helpers')



/* GET home page. */
router.get('/', function (req, res, next) {
  bookHelpers.viewAllBooks().then((bookList)=>{
    console.log(bookList);
    res.render('user/view-books', { admin: false , bookList })
  })
});

module.exports = router;
