import React, { Component } from 'react';
import verifiedIcon from '../icons/Checkmark.png'

export default class TwoPage extends Component {
    render() {
        return (
            <div className="app-view">
                <div className="top-info">
                    <div className="notifier">
                        <img src={verifiedIcon} className="grafficz" />
                        <p className="heading">PIN Verified</p>
                        <p className="subheading">Click Start when you're ready to start making deliveries.</p>
                    </div>
                </div>
                <div className="bottom-info">
                    <div className="put-on-bottom">
                        {/* <p className="heading">PIN</p>
                        <p className="pin">120258</p> */}
                        <button className="start button active mobile-only desktop-only">Start</button>
                    </div>
                </div>
            </div>
        )
    }
}