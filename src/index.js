import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import Nav from './components/Nav.jsx';
import DailyArticle from './components/DailyArticle.jsx';
import AboutPortal from './components/AboutPortal.jsx';
import DevTeam from './components/DevTeam.jsx';

import './css/index.css';

class IndexPage extends React.Component {
  render() {
    return [
      <Header/>,
      <Main>
        <section className='container'>
          <Nav isHomeActive='active'/>
          <DailyArticle/>
          <AboutPortal/>
          <DevTeam/>
        </section>
      </Main>,
      <Footer/>
    ];
  }
}

ReactDOM.render(
  <IndexPage/>,
  document.body
);
