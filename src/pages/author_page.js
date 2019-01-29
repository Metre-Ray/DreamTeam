import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import authorObject from '../data/filmmakers.json';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './author_page.css';
import OverlayVideo from '../components/overlayVideo';
import Mapp from '../components/Map';


class AuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Дашук"; //sessionStorage.getItem('filmmakerName');
        this.lang = sessionStorage.getItem('language') || "rus";
    }

    render() {
        const imgsrc = `../img/${authorObject[this.lang][this.name].photo}`;
        const images = [];
        return (
            <Fragment>
                <section className="top">
                    <h2>{authorObject[this.lang][this.name].name}</h2>
                    <p><img src={imgsrc} alt="filmmaker's photo"></img></p>
                </section>
                <section className="time-line">
                    <Timeline lineColor={'#ddd'}>
                        {   
                            Object.keys(authorObject[this.lang][this.name].biography).sort().map((date) => 
                                <TimelineItem
                                    key={date}
                                    dateText={date}
                                    style={{ color: '#e86971' }}
                                >
                                    <p>
                                        {authorObject[this.lang][this.name].biography[date]}
                                    </p>
                                </TimelineItem>
                            )
                        }
                    </Timeline>
                </section>
                <section className="list-movies">
                    Список произведений:
                    <ul>
                        {
                            authorObject[this.lang][this.name].list_of_movies.map(mov => <li key={mov}>{mov}</li>)
                        }
                    </ul>
                </section>
                <section className="gallery">
                    <p>Фотогалерея</p>
                    {   
                        authorObject[this.lang][this.name].photo_gallery.map(picture => {
                            let addr = `../img/${picture}`;
                            images.push({original: addr, thumbnail: addr, originalClass: 'featured-slide'});
                        })
                    }
                    <ImageGallery items={images} />
                </section>
                <section className="video">
                    <OverlayVideo url={authorObject[this.lang][this.name].link_to_video} />
                </section>
                <section className="map">
                    <p>Место работы автора: </p>
                    <Mapp place={authorObject[this.lang][this.name].place_of_working} />
                </section>
            </Fragment>
        );
    }
}

ReactDOM.render(<AuthorPage />, document.querySelector('main'));
