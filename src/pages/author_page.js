import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import authorObject from '../data/filmmakers.json';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import './tableStyle.css';
import ModalVideo from 'react-modal-video';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import './author_page.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


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


class MyGallery extends React.Component {

    render() {
  
      const images = [
        {
          original: '../img/pict1.jpg',
          thumbnail: '../img/pict1.jpg',
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/2/',
          thumbnail: 'http://lorempixel.com/250/150/nature/2/'
        },
        {
          original: 'http://lorempixel.com/1000/600/nature/3/',
          thumbnail: 'http://lorempixel.com/250/150/nature/3/'
        }
      ]
  
      return (
        <ImageGallery items={images} />
      );
    }
  
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Виктор Тимофеевич Туров"; //sessionStorage.getItem('filmmakerName');
        this.lang = "rus";
        // this.state = {
        //     selectedOption: {label: prevOption, value: prevOption}
        // }
        // this.options = Object.keys(dataObject.mentors).map((mentor) => {
        //     return {label: mentor, value: mentor};
        // });
        // this.handleChange = this.handleChange.bind(this);
    }

    async defineGeoCoords(place) {
        const provider = new OpenStreetMapProvider();
        const results = await provider.search({ query: 'Minsk, Belarus' });
        console.log(results);
        return results[0];
    }

    handleChange(selectedOption) {
        this.setState({ selectedOption });
        localStorage.setItem('mentorDashboardGithub', selectedOption.label);
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        // const { selectedOption } = this.state;
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
                    {/* <MyGallery /> */}
                    <ImageGallery items={images} />
                </section>
                <section className="video">
                    <ReactPlayer url={authorObject[this.lang][this.name].link_to_video} />
                    {/* <Player
                        playsInline
                        poster="/assets/poster.png"
                        src={authorObject[this.lang][this.name].link_to_video}
                    /> */}
                </section>
                <section className="map">
                    <div id="mapid"></div>
                leaflet
                </section>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('main'));
