import React, { Component } from 'react';
import BooksGrid from './BooksGrid'

class BooksShelf extends Component {
    render() {
        const { booksCollection, shelves, changeHandler, title } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid booksCollection={booksCollection} shelves={shelves} changeHandler={changeHandler} />
                </div>
            </div>
        )
    }
}

export  default BooksShelf