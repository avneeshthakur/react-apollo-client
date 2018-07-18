import React, { Component } from 'react';
import { graphql, compose} from 'react-apollo';
import {bookQuery, authorQuery, addbookMutation} from '../queries';

class AddBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      genre:'',
      authorid:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBookMutation({
        variables:{
          name:this.state.name,
          genre:this.state.genre,
          authorid:this.state.authorid
        },
        refetchQueries: [{ query: bookQuery }]
    }); 

  }
  getAuthors() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option>Loading authors..</option>
    } else {
      return data.authors.map(author => {
        return <option key={author.id} value={author.id}>{author.name}</option>
      })
    }
  }
  render() {
    return (
      <div className="addbook">
        <form onSubmit={this.handleSubmit}>
          <label>Book Name: </label>
          <input type="text" name="book"  onChange={(e) => this.setState({name:e.target.value})}/><br/>
          <label>Book Genre: </label>
          <input type="text" name="genre" onChange={(e) => this.setState({genre:e.target.value})} /><br/>
         <select type="text" name="author" onChange={(e) => this.setState({authorid:e.target.value})}>
         <option>Choose Author</option>
         { this.getAuthors() }
         </select><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}



export default compose(
    graphql(authorQuery, { name: "getAuthorsQuery" }),
    graphql(addbookMutation, { name: "addBookMutation" })
)(AddBook);