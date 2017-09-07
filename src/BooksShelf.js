import React from 'react';
import BooksGrid from './BooksGrid'

function BooksShelf(props) {
    const booksCollection = props.booksCollection;
    const shelves = props.shelves;
    const changeHandler = props.changeHandler;
    const title = props.title;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BooksGrid booksCollection={booksCollection} shelves={shelves} changeHandler={changeHandler} />
            </div>
        </div>
    )
}

export  default BooksShelf