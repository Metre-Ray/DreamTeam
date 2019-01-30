import React from 'react';
// import getRandomArticle from '../js/getRandomArticle';

const UIText = require('../data/user-interface.json');

class DailyArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() { //not used for now
    //     const article = getRandomArticle();
    //     this.setState({
    //         name: article.name, 
    //         bio: article.biography,
    //         bio1: article.biography(Object.keys(article.biography).sort()[0]),
    //         img: article.photo
    //     })
    //     // this.props.name = article.name;
    //     // this.props.bio = article.biography;
    //     // this.props.img = article.photo;
    //     // this.props.bio1 = article.biography(Object.keys(article.biography).sort()[0]);
    // }

    render() {
        let lang = 'rus';

        return(
            <section className="daily-article">
                <h2 className="daily-article-header">{UIText[lang]['daily-article-header']}</h2>
                <article>
                    <div className="filmmaker-main">
                        <div className="filmmaker-info">
                            <h3>Виктор Аслюк</h3>    
                            <p>Родился 26 ноября 1961 года. Белорусский режиссер, сценарист. 
                                Выпускник Белорусского государственного университета и Белорусского 
                                академии искусств (мастерская Виктора Дашука). С 1995 года работает 
                                в Национальной киностудии « Беларусьфильм ».
                            </p>    
                        </div>
                        <div className="filmmaker-img">
                            <img src="../img/Authors_photo/Viktor_Asluk_1.jpg" alt="filmmaker's photo"/>
                        </div>
                    </div>
                    
                    <div className="filmmaker-history">
                        <p>
                            С 2003 года - член Европейской киноакадемии . Режиссер более 40 документальных 
                            фильмов. Участник многих международных кинофестивалей, на которых получил около 60 наград. Лауреат фестивалей документального и короткометражного кино «Cinema du Reel» (Франция), «DOKLeipzig» (Германия), Tampere International Short Film Festival (Финляндия), «Послание к человеку» (Россия), Prix Europa (Германия).
                        </p>
                    </div>
                </article>
            </section>
        );
    }
}

export default DailyArticle;
