import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="container">
                    <div className="logo">Team35</div>
                    <a href="/search.html" className="search">search</a>
                </div>
            </header>
        );
    }
}

export default Header;
