import React from 'react';

const UIText = require('../data/user-interface.json');

class Nav extends React.Component {
    render () {
        let lang = sessionStorage.getItem('language') || 'rus';

        return(
            <nav>
                <ul>
                    <li><a href="./index.html" className={"home-button" + this.props.isHomeActive}>{UIText[lang]['home-button']}</a></li>
                    <li><a href="./authors/authors.html" className={"filmmakers-button" + this.props.isFilmmakersActive}>{UIText[lang]['filmmakers-button']}</a></li>
                    <li><a href="" className={"language-button" + this.props.isLanguageActive}>{UIText[lang]['language-button']}</a>
                    </li>
                    <li className="chooseLang">
                        <ul className="submenu">
                            <li id="eng" key="1">eng</li>
                            <li id="rus" key="2">rus</li>
                            <li id="bel" key="3">bel</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
