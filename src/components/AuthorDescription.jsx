import React from 'react';
import '../css/authorDescription.css'

class AuthorDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'ru'
    }
  }

  render() {
    return(
      <article className='author' key={this.props.key}>
        <img src={`../../img/${this.props.photo}`} alt={this.props.name}/>
        <p className='author__name'>{this.props.name}</p>
        <p className='author__movies'>Movies: {this.props.listOfMovies}</p>
      </article>
    );
  }
}

export default AuthorDescription;
