import React from 'react';
import "./App.css";
import SearchBar from './SearchBar/SearchBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      books : [],
      showBookDescription: false,
      printType: 'all',
      bookType: '',
      url: '',
    }

  }

  changeSearchTerm (term) {
    this.setState = ({
       searchTerm: term
    })
  }

  changePrintTypeFilter (type) {
    this.setState = ({
      printType: type,
    })
  }
  
  changeBookTypeFilter (bookType) {
    this.setState = ({
      bookType: bookType,
    })
  }
  
  componentDidMount() {
    if (this.state.bookType = '') {
      this.setState({
        url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAxOUySM6fNOlFXHaxvO7wiaZTkanchXus&q=' + this.state.searchTerm + '&printType=' + this.state.printType,
      })
    } else {
      this.setState({
        url: 'https://www.googleapis.com/books/v1/volumes?key=AIzaSyAxOUySM6fNOlFXHaxvO7wiaZTkanchXus&q=' + this.state.searchTerm + '&printType=' + this.state.printType + '&filter=' + this.state.bookType,
    })
    }
    fetch (this.state.url) 
      .then (response => {
        if(!response.ok) {
          throw new Error ('Something went wrong, please try again.')
        }
        else {
          return response
        }
      })
      .then (response => response.json())
      .then(data =>
        this.setState({
          books: [data],
        }))
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
          <SearchBar 
            handleSearchTerm = {term  => this.changeSearchTerm(term)}
            handlePrintType = {type => this.changePrintTypeFilter(type)}
            handleBookType = {bookType => this.changeBookTypeFilter(bookType)}/>
        </div>
      </main>
    );
  }
}

export default App;