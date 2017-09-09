import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BooksGrid extends Component {
    render() {
        const { booksCollection, shelves, changeHandler } = this.props;
        return (
            <ol className="books-grid">
                {booksCollection && booksCollection.map((book, pIndex) => (
                    <li key={book.id} className="contact-list-item">
                        <div className="book-top">
                            <div className="book-cover thumbnail" style={{backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`}}></div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => changeHandler(book, event.target.value)} value={book.shelf && book.shelf}>
                                    {shelves.map((shelf, cIndex) => {
                                        return <option
                                            key={'shelf' + pIndex + cIndex}
                                            value={shelf.value}
                                            selected={!book.shelf && shelf.label === 'None'}
                                            disabled={shelf.label === 'Move to ...'}>{shelf.label}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="book-title truncate">{book.title}</div>
                        <div className="book-authors truncate">{book.authors && book.authors.join(',')}</div>
                    </li>
                ))}
            </ol>
        )
    }
}

BooksGrid.propTypes = {
    shelves: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired
};

export  default BooksGrid