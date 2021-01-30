import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class TanyaUstadz extends Component {
    render() {
        const style = {
            marginTop: '4%',
            marginLeft: '6%',
            fontSize: '2.5rem',
            fontWeight: '600',
            textDecoration: 'solid',
            width: '80%',
            marginBottom: '1rem',
            color: '#0D6990'
        }
        const imgstyle = {
            display: 'flex',
            position: 'relative'
        }
        return(
            <div>
                <h1 style={style}>Halo Ustadz!</h1>
                <div style={imgstyle}>
                    <img src='images/chatust.png' width="60%"/>
                    <img src='images/createnewchat.png' width="40%" height="10%"/>
                </div>
            </div>
        )
    }
}

export default TanyaUstadz