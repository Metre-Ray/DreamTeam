import React from 'react';
import getRandomArticle from '../js/getRandomArticle';

const UIText = require('../data/user-interface.json');

class DailyArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { 
        const article = getRandomArticle();
        const keys = Object.keys(article.biography).sort();
        const bio1 = article.biography[keys[0]];
        const bio = keys.reduce((prev, date, ind) => {
            if (ind === 0) return '';
            return `${prev} ${date}:  ${article.biography[date]}`;
        }, '');
        this.setState({
            name: article.name, 
            bio,
            bio1,
            img: article.photo
        });
    }

    render() {
        const lang = sessionStorage.getItem("language") || "rus";

        return(
            <section className="daily-article">
                <h2 className="daily-article-header">{UIText[lang]['daily-article-header']}</h2>
                <article>
                    <div className="filmmaker-main">
                        <div className="filmmaker-info">
                            <h3>{this.state.name}</h3>    
                            <p>
                                {this.state.bio1}
                            </p>    
                        </div>
                        <div className="filmmaker-img">
                            <img src={`../img/${this.state.img}`} alt="filmmaker's photo"/>
                        </div>
                    </div>
                    <div className="filmmaker-history">
                        <p>
                            {this.state.bio}
                        </p>
                    </div>
                </article>
            </section>
        );
    }
}

export default DailyArticle;
