import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AddBook from './add-book';
import { bookQuery } from '../queries';

class Book extends Component {
  displayBooks(){
    let data = this.props.data;
    if (data.loading) {
    	return <li>Loading Books..</li>
    } else {
    	return data.books.map(book => {
    		return <li key={book.id}>{book.name}</li>
    	})
    }
  }
  render() {
    return (
      <div className="book">
       <ul>
       	 { this.displayBooks() }
       </ul>
       <br />
       <AddBook />
      </div>
    );
  }
}

export default graphql(bookQuery)(Book);
