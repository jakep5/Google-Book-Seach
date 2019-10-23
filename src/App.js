import React from 'react';
import "./App.css";
import Filters from './Filters/Filters';
import BookList from './BookList/BookList';
import SearchBar from './SearchBar/SearchBar';

function App() {
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

export default App;