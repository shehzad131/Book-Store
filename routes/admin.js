var express = require('express');
var router = express.Router();
var bookHelpers = require('../helpers/book-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {

  let books = [
    {
      'name': "Da Vinci Code",
      'author': "Dan Brown",
      'price': "999",
      'img': "https://picsum.photos/200/300"
    },
    {
      'name': "Harrry Potter",
      'author': "J K Rowling",
      'price': "565",
      'img': "https://picsum.photos/200/301"
    },
    {
      'name': "Sherlock Holmes",
      'author': "Sir Arthur Conan Doyle",
      'price': "626",
      'img': "https://picsum.photos/200/302"
    },
    {
      'name': "Hercule Poirott",
      'author': "Agatha Christie",
      'price': "875",
      'img': "https://picsum.photos/200/303"
    },
]


  res.render('admin/view-books', { admin: true , books })
})

router.get('/add-book', function (req, res, next) {
  res.render('admin/add-book')
})

router.post('/add-book',(req, res) => {
    console.log(req.body);
    console.log(req.files.Image);
    bookHelpers.addBook(req.body,(result)=>{
      res.render('admin/add-book')
    })
  }
)

module.exports = router;
