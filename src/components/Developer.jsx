import React from 'react';

class Developer extends React.Component {
    render () {
        return (
            <article class="team-block">
                <p class="nickname">{this.props.gh}</p>
                <a class="github-link" href={`https://github.com/${this.props.gh}`} target="_blank">
                    <img class="avatar" src={this.props.avatar} alt={this.props.gh}/>
                </a>
            </article>
        );
    }
}

export default Developer;
