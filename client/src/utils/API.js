import axios from "axios";

const BOOKS_API_BASE = 'https://www.googleapis.com/books/v1/volumes?q=';

export default {
  // search for book
  searchBooks: function(searchTitle) {
    let replacedTitle = searchTitle.replace(/\s/g, '+');
    return axios.get(BOOKS_API_BASE + replacedTitle);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    console.log('deleting ' + id);
    
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log('saving book2 with:');
    console.log(bookData);
    return axios.post("/api/books", bookData);
  }
};
