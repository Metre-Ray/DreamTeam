import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="container">
                    <div className="logo">Team35</div>
                    <div className="search">
                        <label id="search-label" for="search-input">Search:</label>
                        <input type="text" id="search-input"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
