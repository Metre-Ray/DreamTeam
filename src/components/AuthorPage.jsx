import React from 'react';
import ReactDOM from 'react-dom';

import Header from './../components/Header.jsx';
import Main from './../components/Main.jsx';
import Footer from './../components/Footer.jsx';

import Author from './../components/Author.jsx';

class AuthorPage extends React.Component {
  render() {
    return [
      <Header/>,
      <Main>
        <section class='container'>
          <Author/>
        </section>
      </Main>,
      <Footer/>
    ];
  }
}

export default AuthorPage;
