import React, { Component } from 'react';
import PinIcon from '../icons/Location.png'

export default class OnePage extends Component {
    render() {
        return (
            <div className="app-view">
                <div className="top-info">
                    <div className="notifier">
                        <img src={PinIcon} className="grafficz" />
                        <p className="heading">Going to Pick-up location</p>
                        <p className="subheading">Show this PIN to the contact to receive cargo.</p>
                    </div>
                </div>
                <div className="bottom-info">
                    <div className="put-on-bottom">
                        <p className="heading">PIN</p>
                        <p className="pin">120258</p>
                        <button className="start button active mobile-only desktop-only">Start</button>
                    </div>
                </div>
            </div>
        )
    }
}