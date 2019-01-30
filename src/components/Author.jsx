import React, { Fragment } from 'react';

import authorObject from '../data/filmmakers.json';
import transObject from '../data/authorPage.json';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import OverlayVideo from './OverlayVideo.jsx';
import Map from './Map.jsx';

import '../css/authorPage.css';


class Author extends React.Component {
    constructor(props) {
        super(props);
        this.lang = sessionStorage.getItem('language') || 'rus';
        this.name = props.name;
    }

    render() {
        const imgsrc = `../../img/${authorObject[this.lang][this.name].photo}`;
        const images = [];
        return (
            <Fragment>
                <section className='top'>
                    <h2>{authorObject[this.lang][this.name].name}</h2>
                    <p><img src={imgsrc} alt="filmmaker's photo"></img></p>
                </section>
                <section className='time-line'>
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
                <section className='list-movies'>
                    <p>{transObject[this.lang].list_movies}</p>
                    <ul>
                        {
                            authorObject[this.lang][this.name].list_of_movies.map(mov => <li key={mov}>{mov}</li>)
                        }
                    </ul>
                </section>
                <section className='gallery'>
                    <p>{transObject[this.lang].gallery}</p>
                    {   
                        authorObject[this.lang][this.name].photo_gallery.map(picture => {
                            let addr = `../../img/${picture}`;
                            images.push({original: addr, thumbnail: addr, originalClass: 'featured-slide'});
                        })
                    }
                    <ImageGallery items={images} />
                </section>
                <section className='video'>
                    <OverlayVideo url={authorObject[this.lang][this.name].link_to_video} text={transObject[this.lang].watch_video} />
                </section>
                <section className='map'>
                    <p>{transObject[this.lang].place_of_working}</p>
                    <Map place={authorObject[this.lang][this.name].place_of_working} />
                </section>
            </Fragment>
        );
    }
}

export default Author;
