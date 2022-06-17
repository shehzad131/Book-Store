var express = require('express');
var router = express.Router();


/* GET home page. */
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
  res.render('index', { books, admin: false });
});

module.exports = router;
