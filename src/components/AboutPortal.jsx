import React from 'react';

const UIText = require('../data/user-interface.json');

class AboutPortal extends React.Component {
    render() {
        let lang = 'rus';

        return (
            <section className="about-portal">
                <h2 className="about-portal-header">{UIText[lang]['about-us-header']}</h2>
                <p className="about-portal-text">{UIText[lang]['about-us-text']}</p>
            </section>
        );
    }
}

export default AboutPortal;
