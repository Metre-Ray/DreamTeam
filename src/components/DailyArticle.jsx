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
                            <div className="filmmaker-name">Виктор Аслюк</div>    
                            <p>Родился 26 ноября 1961 года. Белорусский режиссер, сценарист. 
                                Выпускник Белорусского государственного университета и Белорусского 
                                академии искусств (мастерская Виктора Дашука). С 1995 года работает 
                                в Национальной киностудии « Беларусьфильм ».
                                {/* <br/> */}
                            </p>    
                        </div>
                        <div className="filmmaker-img">
                            <img src="../img/Authors_photo/Viktor_Asluk_1.jpg" alt="filmmaker's photo"/>
                        </div>
                    </div>
                    
                    <div className="filmmaker-history">
                        <p id="filmmaker-history">
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
