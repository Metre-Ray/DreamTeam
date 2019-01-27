import React from 'react';
import L from 'leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';


export default class Mapp extends React.Component {
    componentDidMount() {
        this.makeMap();
    }

    async makeMap(place = 'Minsk, Belarus') {
        place = this.props.place;
        const provider = new OpenStreetMapProvider();
        const coords = await provider.search({ query: place });
        const mymap = L.map('mapid').setView([coords[0].y, coords[0].x], 6);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibWV0cmVyYXkiLCJhIjoiY2pyZG10ejJtMGg2dTQ5cWtuOWtsbWs4ZiJ9.vPmo1y2-ocH20LSe77hbZg'
        }).addTo(mymap);
        L.marker([coords[0].y, coords[0].x]).addTo(mymap);
    }

    render() {
        return <div id="mapid"></div>;
    }

}