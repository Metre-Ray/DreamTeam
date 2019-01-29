import React from 'react';

class Search extends React.Component {
  render () {
    return (
      <div className="wrapper">
          <div className="asking">
              <input type="search" name="" placeholder='поиск' className="input"/>
              <input id="submit" type="submit" name="" value={sessionStorage.getItem('language') === 'eng' ? 'SEARCH!' : 'ПОИСК!'} className="search"/>
          </div>
          <div className="answer">
              <ul></ul>
          </div>
      </div>
    );
  }
}

export default Search;
