import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import './App.css';
import BooksList from './BooksList'
import BooksSearch from "./BooksSearch";
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    groupedBooks: []
  };

  /**
  * Call get all books api when component is rendered
  */
  componentDidMount() {
      this.getAllBooks();
  };


  /**
  * Search all books
  */
  getAllBooks = () => {
      BooksAPI.getAll().then((books) => {
          this.setState({groupedBooks: _.groupBy(books, 'shelf')});
      });
  };

  /**
  * Search filtered books
  */
  searchBooks = (qString) => {
      this.setState({searchedBooks: []});
      BooksAPI.search(qString, 10).then((books) => {
          if (_.isArray(books)) {
              this.setState({searchedBooks: books});
              let booksCollection = this.state.books.concat(books);
              this.setState({books: booksCollection});
          }
    });
  };

 /**
  * Update book shelf
  */
  shelfUpdate = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.getAllBooks();
      });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BooksList books={this.state.groupedBooks} onShelfUpdate={this.shelfUpdate} />
        )} />

        <Route path="/search" render={() => (
            <BooksSearch onSearch={this.searchBooks} searchedBooks={this.state.searchedBooks} onShelfUpdate={this.shelfUpdate} />
        )} />
      </div>
    );
  }
}

export default BooksApp;
