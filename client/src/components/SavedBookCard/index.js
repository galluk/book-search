import React from "react";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SaveBtn from "../SaveBtn";
// import ViewBtn from "../ViewBtn";
import "./style.css";

function SavedBookCard(props) {
  
  // view thew preview page of the book
  function viewBook() {
    window.open(props.link, '_blank');
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook() {
    API.deleteBook(props.id)
      .then(res => props.afterDelete())
      .catch(err => console.log(err));
  }

  return (
    <div className="card">
      <div>
        <h4>{props.title}</h4> 
        <Button variant="danger" className="float-right" onClick={() => deleteBook()}>Delete</Button>
        <Button variant="outline-primary" className="float-right" onClick={() => viewBook()}>View</Button>
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

export default SavedBookCard;
