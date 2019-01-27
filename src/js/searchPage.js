import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import Search from '../components/Search.jsx';

import '../css/index.css';

class SearchPage extends React.Component {
  render () {
    return [
      <Header/>,
      <Main>
        <section className='container'>
          <Search/>
        </section>
      </Main>,
      <Footer/>
    ];
  }
}

ReactDOM.render(
  <SearchPage/>,
  document.body
);
