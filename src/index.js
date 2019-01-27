import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import style from './css/style.css';

class IndexPage extends React.Component {
  render() {
    return [
      <Header/>,
      <Main/>,
      <Footer/>
    ];
  }
}

ReactDOM.render(
  <IndexPage/>,
  document.body
);
