var express = require('express');
var router = express.Router();
var bookHelpers = require('../helpers/book-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {
  bookHelpers.viewAllBooks().then((bookList)=>{
    console.log(bookList);
    res.render('admin/view-books', { admin: true , bookList })
  })
})

router.get('/add-book', function (req, res, next) {
  res.render('admin/add-book', {admin: true})
})

router.post('/add-book',(req, res) => {
    //console.log(req.body);
    //console.log(req.files.Image);
    bookHelpers.addBook(req.body,(id)=>{
      let image = req.files.Image
      //console.log(id);
      image.mv('./public/book-images/'+id+'.jpg', (err)=>{
        if(err){console.log(err);}
        else{res.render('admin/add-book', {admin: true})}
      })
    })
  }
)

module.exports = router;
