import React from 'react';

class DailyArticle extends React.Component {
    render() {
        return(
            <section class="daily-article">
                <h2 class="daily-article-header">Daily Article</h2>
                <article id="filmmaker">
                    <div class="filmmaker-main">
                        <div class="filmmaker-info">
                            <div class="filmmaker-name">Elon Musk</div>    
                            <p>I THINK THAT THIS BLOCK SHOULD TAKE INFO FROM filmmakerS JSON!!! <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur laudantium autem numquam iure officiis delectus veritatis quos fugiat a ab.</p>    
                        </div>
                        <div class="filmmaker-img">
                            <img src="" alt="musk"/>
                        </div>
                    </div>
                    
                    <div class="filmmaker-history">
                        <p id="filmmaker-history">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quos ratione deserunt repellendus vero porro facere modi quam, deleniti consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita similique animi deleniti. Iusto aliquid eligendi perferendis error. Blanditiis totam in, odit inventore asperiores! Neque placeat nihil repellendus reprehenderit aut!</p>
                    </div>
                </article>
            </section>
        );
    }
}

export default DailyArticle;
