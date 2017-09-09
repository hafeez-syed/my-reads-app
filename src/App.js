import React from 'react';
import { Route } from 'react-router-dom';
import _ from 'lodash';
import './App.css';
import BooksList from './BooksList'
import BooksSearch from "./BooksSearch";
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    searchedBooks: [],
    groupedBooks: {}
  };

  shelves = [
      {
          label: 'Move to ...',
          value: 'none'
      },
      {
          label: 'Currently Reading',
          value: 'currentlyReading'
      },
      {
          label: 'Want to Read',
          value: 'wantToRead'
      },
      {
          label: 'Read',
          value: 'read'
      },
      {
          label: 'None',
          value: 'none'
      }
  ];

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
      BooksAPI.search(qString, 10).then((books) => {
          if (_.isArray(books)) {
              this.setState({searchedBooks: books});
              this.matchShelves();
          }
    });
  };

 /**
  * Update book shelf
  */
  shelfUpdate = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.removeBookFromShelf(book);
          book.shelf = shelf;
          this.addBookToShelf(book, shelf)
      });
  };

  /**
   * Remove book object from the shelf array
   *
   * @param book
   */
  removeBookFromShelf = (book) => {
      _.remove(this.state.groupedBooks[book.shelf], {id: book.id});
  };

  /**
   * Add book object to the shelf array
   *
   * @param book
   */
  addBookToShelf = (book) => {
      let books = this.state.groupedBooks;
      books[book.shelf].push(book);
      this.setState({groupedBooks: books});
      this.matchShelves();
  };

  /**
   * If books are searched, then update their shelf state if:
   * 1 - they have been moved to their shelves from Search page to list page
   * 2 - they have been moved on the same list page
   */
  matchShelves = () => {
      if(this.state.searchedBooks && _.isArray(this.state.searchedBooks) && this.state.searchedBooks.length) {
          let grpBooks = this.state.groupedBooks;
          let searchedBooks = this.state.searchedBooks;

          _.forIn(grpBooks, (value, key) => {
              _.forEach(value, (val) => {
                  _.map(searchedBooks, (book) => {
                      if(book.id === val.id) {
                          book.shelf = val.shelf;
                      }
                  });
              });
          });
          this.setState({searchedBooks: searchedBooks});
      }
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BooksList
                books={this.state.groupedBooks}
                onShelfUpdate={this.shelfUpdate}
                shelves={this.shelves} />
        )} />

        <Route path="/search" render={() => (
            <BooksSearch
                onSearch={this.searchBooks}
                searchedBooks={this.state.searchedBooks}
                onShelfUpdate={this.shelfUpdate}
                shelves={this.shelves} />
        )} />
      </div>
    );
  }
}

export default BooksApp;
