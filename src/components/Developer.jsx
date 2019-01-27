import React from 'react';

class Developer extends React.Component {
    render () {
        return (
            <article className="team-block">
                <p className="nickname">{this.props.gh}</p>
                <a className="github-link" href={`https://github.com/${this.props.gh}`} target="_blank">
                    <img className="avatar" src={this.props.avatar} alt={this.props.gh}/>
                </a>
            </article>
        );
    }
}

export default Developer;
