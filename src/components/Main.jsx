import React from 'react';

import Nav from './Nav.jsx';

class Main extends React.Component {
    render() {
        return(
            <main>
                <Nav isHomeActive='active'></Nav>
            </main>
        );
    }
}

export default Main;
