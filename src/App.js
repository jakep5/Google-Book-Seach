import React from 'react';
import "./App.css";
import Filters from './Filters/Filters';
import BookList from './BookList/BookList';
import SearchBar from './SearchBar/SearchBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books : [],
      showBookDescription: false,
    }

  }

  handleSubmit () {

  }
  
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAxOUySM6fNOlFXHaxvO7wiaZTkanchXus&q=' + book + '&printType=' + printType + '&filter=' + bookType;

    fetch (url) 
      .then (response => {
        if(!response.ok) {
          throw new Error ('Something went wrong, please try again.')
        }
        else {
          return response
        }
      })
      .then (response => response.json())
      .then(console.log(response))
      .catch (err => {
        this.setState({
          error: err.message
        })
      })
    }
  
  render() {
    return (
      <main className='App'>
        <div className = "App">
          <div className = "title">
            <h1>Google Book Search</h1>
          </div>
          <SearchBar />
          <Filters />
          <BookList />
        </div>
      </main>
    );
  }
}

export default App;