import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid'

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
        const {searchedBooks, shelves} = this.props;
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
                <BooksGrid booksCollection={searchedBooks} shelves={shelves} changeHandler={this.changeHandler} />
            </div>
        </div>
        );
    }
}

BooksSearch.propTypes = {
    shelves: PropTypes.array.isRequired,
    searchedBooks: PropTypes.array.isRequired
};

export default BooksSearch;