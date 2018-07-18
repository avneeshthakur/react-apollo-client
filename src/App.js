import React, { Component } from 'react';
import Book from './components/book' 
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


// setup apollo client 
const client = new ApolloClient({
	uri:'http://localhost:8000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
       <h2>Reading books</h2>
       <Book />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
