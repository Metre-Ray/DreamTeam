import React from 'react';

const UIText = require('../data/user-interface.json');

class DailyArticle extends React.Component {
    render() {
        let lang = 'rus';

        return(
            <section className="daily-article">
                <h2 className="daily-article-header">{UIText[lang]['daily-article-header']}</h2>
                <article id="filmmaker">
                    <div className="filmmaker-main">
                        <div className="filmmaker-info">
                            <div className="filmmaker-name">Elon Musk</div>    
                            <p>I THINK THAT THIS BLOCK SHOULD TAKE INFO FROM filmmakerS JSON!!! <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laudantium autem numquam iure officiis delectus veritatis quos fugiat a ab.</p>    
                        </div>
                        <div className="filmmaker-img">
                            <img src="" alt="musk"/>
                        </div>
                    </div>
                    
                    <div className="filmmaker-history">
                        <p id="filmmaker-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quos ratione deserunt repellendus vero porro facere modi quam, deleniti consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita similique animi deleniti. Iusto aliquid eligendi perferendis error. Blanditiis totam in, odit inventore asperiores! Neque placeat nihil repellendus reprehenderit aut!</p>
                    </div>
                </article>
            </section>
        );
    }
}

export default DailyArticle;
