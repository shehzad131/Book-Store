var db = require('../config/connection')

module.exports = {
    addBook: (book, callback)=>{
        console.log(book);
        db.get().collection('book').insertOne(book).then((data)=>{
            callback(true)
        })
    }
}