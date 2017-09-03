import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSearch extends Component {
    updateQuery = (queryString) => {
        this.props.onSearch(queryString);
    };

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
        const {searchedBooks} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchedBooks && searchedBooks.map((book) => (
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
                            <div className="book-authors truncate">{book.authors && book.authors.join(',')}</div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        );
    }
}

export default BooksSearch;