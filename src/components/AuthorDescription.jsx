import React from 'react';

class AuthorDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'ru'
    }
  }

  render() {
    return(
      <section className='author'>
        <img src={this.props.photo} alt={this.props.name}/>
        <p className='author__name'>{this.props.name}</p>
        <p className='author__movies'>{this.props.listOfMovies}</p>
      </section>
    );
  }
}

export default AuthorDescription;
