import React from 'react';

const UIText = require('../data/user-interface.json');

class Nav extends React.Component {
    render () {
        let lang = "rus";

        return(
            <nav>
                <ul>
                    <li><a href="/html/index.html" className={"home-button" + this.props.isHomeActive}>{UIText[lang]['home-button']}</a></li>
                    <li><a href="/html/authors/authors.html" className={"filmmakers-button" + this.props.isFilmmakersActive}>{UIText[lang]['filmmakers-button']}</a></li>
                    <li><a href="#" className={"language-button" + this.props.isLanguageActive}>{UIText[lang]['language-button']}</a>
                        <ul className="submenu">
                            <li id="eng">eng</li>
                            <li id="rus">rus</li>
                            <li id="bel">bel</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
