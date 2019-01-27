import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';


export default class OverlayVideo extends React.Component {
    constructor(props) {
        super(props);
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
                    <ReactPlayer url={this.props.url} controls/>
                </div>
            </div>;
        if (this.state.isOpen === true)
            return (
                <Fragment>
                    {modal}
                    <div onClick={this.openModal} className="video-button">Watch video about filmmaker</div>
                </Fragment>
            );
        else
            return (
                <Fragment>
                    <div onClick={this.openModal} className="video-button">Watch video about filmmaker</div>
                </Fragment>
            )
    }
}