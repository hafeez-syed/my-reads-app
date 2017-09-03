import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        const { books } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.currentlyReading && books.currentlyReading.map((book) => (
                                                <li key={book.id} className="contact-list-item">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                                        <div className="book-shelf-changer">
                                                            <select onChange={(event) => this.changeHandler(book, event.target.value)}>
                                                                <option value="none" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title truncate">{book.title}</div>
                                                    <div className="book-authors truncate">{book.authors.join(',')}</div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.wantToRead && books.wantToRead.map((book) => (
                                                <li key={book.id} className="contact-list-item">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                                        <div className="book-shelf-changer">
                                                            <select onChange={(event) => this.changeHandler(book, event.target.value)}>
                                                                <option value="none">Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title truncate">{book.title}</div>
                                                    <div className="book-authors truncate">{book.authors.join(',')}</div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bookshelf">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {books.read && books.read.map((book) => (
                                                <li key={book.id} className="contact-list-item">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                                                        <div className="book-shelf-changer">
                                                            <select onChange={(event) => this.changeHandler(book, event.target.value)}>
                                                                <option value="none">Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title truncate">{book.title}</div>
                                                    <div className="book-authors truncate">{book.authors.join(',')}</div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

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