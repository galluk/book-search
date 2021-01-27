import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SaveBtn from "../SaveBtn";
// import ViewBtn from "../ViewBtn";
import "./style.css";

function BookCard(props) {
  
  // view thew preview page of the book
  function viewBook(bookURL) {
    window.open(bookURL, '_blank');
  }

  return (
    <div className="card">
      {/* <ViewBtn onClick={() => viewBook(props.link)} />
      <SaveBtn onClick={() => props.saveBook} /> */}
      <h4>{props.title}</h4> 
      <Button variant="outline-primary" className="float-right" onClick={() => viewBook(props.link)}>View</Button>
      <Button variant="primary" className="float-right" onClick={() => props.saveBook}>Save</Button>
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

export default BookCard;
