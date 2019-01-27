import React from 'react';

class Nav extends React.Component {
    render () {
        return(
            <nav>
                <ul>
                    <li><a href="#" className={"home-button" + this.props.isHomeActive}>Home</a></li>
                    <li><a href="#" className={"filmmakers-button" + this.props.isFilmmakersActive}>Filmmakers</a></li>
                    <li><a href="#" className={"search-button" + this.props.isSearchActive}>Search</a></li>
                    <li><a href="#" className={"language-button" + this.props.isLanguageActive}>Language</a>
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
