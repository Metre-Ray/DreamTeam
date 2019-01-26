import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import authorObject from '../data/filmmakers.json';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import './author_page.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';

// pk.eyJ1IjoibWV0cmVyYXkiLCJhIjoiY2pyZG10ejJtMGg2dTQ5cWtuOWtsbWs4ZiJ9.vPmo1y2-ocH20LSe77hbZg


class MyModalVideo extends React.Component {

    constructor () {
        super()
        this.state = {
        isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render () {
        return (
        <div>
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} src="https://www.youtube.com/" videoId='' onClose={() => this.setState({isOpen: false})} />
            <button onClick={this.openModal}>Open</button>
        </div>
        )
    }
}


class ModalV extends React.Component {

    constructor(props) {
        super(props);
        this.name = "Виктор Тимофеевич Туров"; //sessionStorage.getItem('filmmakerName');
        this.lang = "rus";
        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal () {
        this.setState({isOpen: true})
    }

    closeModal() {
        this.setState({isOpen: false});
    }


    render () {
        const modal = <div className="modal-window" onClick={this.closeModal}>
                <div className="modal-content">
                    <ReactPlayer url={authorObject[this.lang][this.name].link_to_video} />
                </div>
            </div>;
        if (this.state.isOpen === true)
            return (
                <Fragment>
                    {modal}
                    <button onClick={this.openModal}>Open</button>
                </Fragment>
            );
        else
            return (
                <Fragment>
                    <button onClick={this.openModal}>Open</button>
                </Fragment>
            )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Виктор Тимофеевич Туров"; //sessionStorage.getItem('filmmakerName');
        this.lang = "rus";
    }

    // componentDidMount() {
    //     const mymap = L.map('mapid').setView([51.505, -0.09], 13);
    //     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 14,
    //         id: 'mapbox.streets',
    //         accessToken: 'pk.eyJ1IjoibWV0cmVyYXkiLCJhIjoiY2pyZG10ejJtMGg2dTQ5cWtuOWtsbWs4ZiJ9.vPmo1y2-ocH20LSe77hbZg'
    //     }).addTo(mymap);
    //     document.querySelector('#mapid').style.display = 'block';
    //     // mymap.invalidateSize();
    // }

    async defineGeoCoords(place) {
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query: 'Minsk, Belarus' });
        console.log(results);
        return results[0];
    }

    render() {
        const imgsrc = `../img/${authorObject[this.lang][this.name].photo}`;
        const images = [];
        this.defineGeoCoords();
        return (
            <Fragment>
                <h2>{this.name}</h2>
                <p><img src={imgsrc} alt="filmmaker's photo"></img></p>
                <section className="time-line">
                    <Timeline lineColor={'#ddd'}>
                        {
                            Object.keys(authorObject[this.lang][this.name].biography).map((date) => 
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
                    {   
                        authorObject[this.lang][this.name].photo_gallery.map(picture => {
                            let addr = `../img/${picture}`;
                            images.push({original: addr, thumbnail: addr});
                        })
                    }
                    <ImageGallery items={images} />
                </section>
                <section className="video">
                    <ModalV />
                    {/* <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={authorObject[this.lang][this.name].link_to_video}
                    /> */}
                </section>
                <section className="mapp">
                    <div id="mapid"></div>
                    MAAAAAAAAAP
                </section>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
