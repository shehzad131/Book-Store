const { ObjectId } = require('mongodb');
const { default: async } = require('neo-async');
var db = require('../config/connection')

module.exports = {
    addBook: (book, callback)=>{
        //console.log(book);
        db.get().collection('book').insertOne(book).then((data)=>{
            callback(data.insertedId);
        })
    },
    viewAllBooks: ()=>{
        return new Promise(async(resolve,reject)=>{
            let bookList = await db.get().collection('book').find().toArray()
            resolve(bookList)
        })
    }
}