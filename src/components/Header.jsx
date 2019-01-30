import React from 'react';
import changeLanguage from '../js/changeLanguage';

const UIText = require('../data/user-interface.json');

class Header extends React.Component {

    componentDidMount() {
        changeLanguage();    
    }

    render () {
        const lang = sessionStorage.getItem('language') || 'rus';

        return (
            <header>
                <div className="container">
                    <div className="logo">Team35</div>
                    <h1>{UIText[lang]['title']}</h1>
                    {/* <a href="./search.html" className="search">{UIText[lang]['search-button']}</a> */}
                    <ul className="chooseLang submenu">
                        <li id="eng" key="1">eng</li>
                        <li id="rus" key="2">rus</li>
                        <li id="bel" key="3">bel</li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
