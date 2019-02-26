import React from 'react';
import '../css/searchPage.css';

class Search extends React.Component {
  render() {
    const lang = sessionStorage.getItem('language');
    return (
      <div className="wrapper">
        <div className="asking">
          <input type="search" name="" placeholder="поиск" className="input" />
          <input id="submit" type="submit" name="" value="ПОИСК!" className="search" />
        </div>
        <div className="answer">
          <ul />
        </div>
      </div>
    );
  }
}

export default Search;
