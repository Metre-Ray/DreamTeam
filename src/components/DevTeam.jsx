import React from 'react';

import Developer from './Developer.jsx';

const UIText = require('../data/user-interface.json');

class DevTeam extends React.Component {
    render() {
        let lang = 'rus';

        return(
            <section className="dev-team">
                <h2 className="dev-team-header">{UIText[lang]['dev-team-header']}</h2>
                <div className="team-links">
                    <Developer gh='metre-ray' avatar='https://avatars1.githubusercontent.com/u/26404831'/>
                    <div className="cross"></div>
                    <Developer gh='garnich' avatar='https://avatars0.githubusercontent.com/u/33061150'/>
                    <div className="cross"></div>
                    <Developer gh='hellsingi' avatar='https://avatars0.githubusercontent.com/u/43145895'/>
                    <div className="cross"></div>
                    <Developer gh='exedystyle' avatar='https://avatars3.githubusercontent.com/u/38404047'/>
                    <div className="cross"></div>
                    <Developer gh='nastyalo' avatar='https://avatars0.githubusercontent.com/u/32715171'/>
                    <div className="cross"></div>
                    <Developer gh='aliaksandrposakh' avatar='https://avatars0.githubusercontent.com/u/41996003'/>
                </div>
            </section>
        );
    }
}

export default DevTeam;
