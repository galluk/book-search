import React, { useState, useEffect } from "react";
import SavedBookCard from "../components/SavedBookCard"
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
  // Set component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-10 sm-12">
          <Jumbotron>
            <h1>(React) Google Book Search</h1>
            <h3>Search for and save books of Interest</h3>
          </Jumbotron>
          <h3>Saved Books</h3>
          {books.length ? (
            <List>
              {books.map(book => (
                console.log(book._id),
                <ListItem key={book._id}>
                    <SavedBookCard
                      id={book._id}
                      title={book.title}
                      authors={book.authors.join(', ')}
                      thumbnail={book.image}
                      description={book.description}
                      link={book.link}
                      afterDelete={loadBooks}
                      />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}


export default Saved;
