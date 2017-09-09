import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksShelf from './BooksShelf';

const BooksList = (props) => {
    /**
     * Call changeEvent handler on selection change
     *
     * @param book
     * @param shelf
     */
    const shelfChangeHandler = (book, shelf) => {
        props.onShelfUpdate(book, shelf);
    };
    const books = props.books;
    const shelves = props.shelves;

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BooksShelf booksCollection={books.currentlyReading} shelves={shelves} changeHandler={shelfChangeHandler} title="Currently Reading" />

                    <BooksShelf booksCollection={books.wantToRead} shelves={shelves} changeHandler={shelfChangeHandler} title="Want to Read" />

                    <BooksShelf booksCollection={books.read} shelves={shelves} changeHandler={shelfChangeHandler} title="Read" />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
};

BooksList.propTypes = {
    books: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired
};

export default  BooksList;