import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="container">
                        <div className="logo">Team35</div>
                <div className="footer-text">
                    <p>All rights are right. All lefts are left.</p>
                </div>
                <div >
                    <img className="rss-logo" src="https://rollingscopes.com/images/logo_rs_text.svg" alt="RSS"/>
                </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
