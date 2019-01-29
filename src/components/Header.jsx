import React from 'react';

const UIText = require('../data/user-interface.json');

class Header extends React.Component {
    render () {
        let lang = 'rus';

        return (
            <header>
                <div className="container">
                    <div className="logo">Team35</div>
                    <h1>Belarusian filmmakers</h1>
                    <a href="./search.html" className="search">{UIText[lang]['search-button']}</a>
                </div>
            </header>
        );
    }
}

export default Header;
