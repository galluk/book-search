import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchedBookCard from "../components/SearchedBookCard"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})
  console.log(books);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function displayResults(returnedBooks) {
    setBooks(returnedBooks);
  }

  // When the form is submitted, use the API.searchBooks method to call the google books api.
  // Then load the returned list
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBooks(formObject.title)
        .then(res => displayResults(res.data.items))
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-10 sm-12">
            <Jumbotron>
              <h1>(React) Google Book Search</h1>
              <h3>Search for and save books of Interest</h3>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>

        </Row>
        <Row>
          <Col size="md-12 sm-12">
            <h2>Results</h2>
            {books.length ? (
              <List>
                {books.map(book => (                  
                  <ListItem key={book.id}>
                    {/* <SaveBtn onClick={() => saveBook(book)} /> */}
                    <SearchedBookCard
                      title={book.volumeInfo.title}
                      authors={(typeof book.volumeInfo.authors === "undefined") ? '' : book.volumeInfo.authors.join(', ')}
                      thumbnail={(typeof book.volumeInfo.imageLinks === "undefined") ? '' : book.volumeInfo.imageLinks.smallThumbnail}
                      description={book.volumeInfo.description}
                      link={book.volumeInfo.previewLink}
                      // saveBook={saveBook(book)}
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
  
  
  export default Search;