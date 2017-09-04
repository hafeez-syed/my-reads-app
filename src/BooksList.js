import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksShelf from './BooksShelf';

class BooksList extends Component {
    /**
     * Call changeEvent handler on selection change
     *
     * @param book
     * @param shelf
     */
    changeHandler = (book, shelf) => {
        this.props.onShelfUpdate(book, shelf);
    };
    render() {
        const { books, shelves } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BooksShelf booksCollection={books.currentlyReading} shelves={shelves} changeHandler={this.changeHandler} title="Currently Reading" />

                        <BooksShelf booksCollection={books.wantToRead} shelves={shelves} changeHandler={this.changeHandler} title="Want to Read" />

                        <BooksShelf booksCollection={books.read} shelves={shelves} changeHandler={this.changeHandler} title="Read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default  BooksList;