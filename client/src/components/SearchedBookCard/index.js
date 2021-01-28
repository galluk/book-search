import React from "react";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SaveBtn from "../SaveBtn";
// import ViewBtn from "../ViewBtn";
import "./style.css";

function SearchedBookCard(props) {
  
  // view thew preview page of the book
  function viewBook(bookURL) {
    window.open(bookURL, '_blank');
  }

  // Saves a book to the database with a given id
  function saveBook(book) {
    console.log('saving book');
    const bookDetails = {
        title: book.title, 
        authors: book.authors.split(', '),
        description: book.description,
        image: book.thumbnail,
        link: book.link
    };  
    API.saveBook(bookDetails)
      .then(alert('The book has been added to your saved list.'))
      .catch(err => console.log(err));
  }
  
  return (
    <div className="card">
      {/* <ViewBtn onClick={() => viewBook(props.link)} />
      <SaveBtn onClick={() => props.saveBook} /> */}
      <div>
        <h4>{props.title}</h4> 
        <Button variant="outline-primary" className="float-right" onClick={() => viewBook(props.link)}>View</Button>
        <Button variant="primary" className="float-right" onClick={() => saveBook(props)}>Save</Button>
      </div>
      <p>Written by: {props.authors}</p>
      <div className="img-container">
        <img alt={props.title} src={props.thumbnail}></img>
        <p>{props.description}</p>
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default SearchedBookCard;
