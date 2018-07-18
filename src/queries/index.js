import { gql } from 'apollo-boost';

 
//query for getting all books
export const bookQuery = gql`
 {
 	books {
 		id,
 		name,
 		genre
 	}
 }
`

 
//query for getting all authors
export const authorQuery = gql`
 {
 	authors {
 		id,
 		name
 	}
 }
`

//query for saving  books
export const addbookMutation = gql`
 mutation($name:String!,$genre:String!,$authorid:ID!) {
  addBook(name:$name,genre:$genre,authorid:$authorid) {
    id,
    name,
    genre
  }
 }
`
