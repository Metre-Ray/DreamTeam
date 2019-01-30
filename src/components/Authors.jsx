import React from 'react';

import AuthorDescription from './AuthorDescription.jsx';

const authorsData = require('../data/filmmakers.json');

class Authors extends React.Component {
  render () {
    let lang = 'eng';
    let authors = [];
    let authorsElems;

    for (let key in authorsData[lang]) {
      let authorObj = {
        name: authorsData[lang][key].name,
        photo: authorsData[lang][key].photo,
        listOfMovies: authorsData[lang][key].list_of_movies.join(', '),
      }

      authors.push(authorObj);
    }

    authorsElems = authors.map((item, index) => {
      return <AuthorDescription name={item.name} photo={item.photo} listOfMovies={item.listOfMovies} key={index} />
    });

    return (
      <section className='authors'>
        {authorsElems}
      </section>
    );
  }
}

export default Authors;
