import React from 'react';

const UIText = require('../data/user-interface.json');

class Nav extends React.Component {
    render () {
        const lang = sessionStorage.getItem('language') || 'rus';

        return(
            <nav>
                <ul>
                    <li><a href="./index.html" className={"home-button" + this.props.isHomeActive}>{UIText[lang]['home-button']}</a></li>
                    <li>
                        <a href="./authors/authors.html" className={"filmmakers-button" + this.props.isFilmmakersActive}>{UIText[lang]['filmmakers-button']}</a>
                    </li>
                    <li><a href="./search.html" className="search">{UIText[lang]['search-button']}</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
