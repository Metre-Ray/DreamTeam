import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/Header.jsx';
import Main from '../components/Main.jsx';
import Footer from '../components/Footer.jsx';

import Authors from '../components/Authors.jsx';

import '../css/index.css';

class AuthorsPage extends React.Component {
  render () {
    return [
      <Header/>,
      <Main>
        <Authors/>
      </Main>,
      <Footer/>
    ];
  }
}

ReactDOM.render(
  <AuthorsPage/>,
  document.body
);
