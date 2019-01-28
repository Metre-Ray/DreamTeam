import React from 'react';

import Developer from './Developer.jsx';

class DevTeam extends React.Component {
    render() {
        return(
            <section class="dev-team">
                <h2 class="dev-team-header">Our great team</h2>
                <div class="team-links">
                    <Developer gh='metre-ray' avatar='https://avatars1.githubusercontent.com/u/26404831'/>
                    <div class="cross"></div>
                    <Developer gh='garnich' avatar='https://avatars0.githubusercontent.com/u/33061150'/>
                    <div class="cross"></div>
                    <Developer gh='hellsingi' avatar='https://avatars0.githubusercontent.com/u/43145895'/>
                    <div class="cross"></div>
                    <Developer gh='exedystyle' avatar='https://avatars3.githubusercontent.com/u/38404047'/>
                    <div class="cross"></div>
                    <Developer gh='nastyalo' avatar='https://avatars0.githubusercontent.com/u/32715171'/>
                    <div class="cross"></div>
                    <Developer gh='aliaksandrposakh' avatar='https://avatars0.githubusercontent.com/u/41996003'/>
                </div>
            </section>
        );
    }
}

export default DevTeam;
