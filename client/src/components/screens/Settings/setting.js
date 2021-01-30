import React, { Component } from 'react';

class Settings extends Component {

    render() {
        const style = {
            marginTop: '4%',
            marginLeft: '6%',
            fontSize: '2.5rem',
            fontWeight: '600',
            width: '80%',
            marginBottom: '1rem',
            color: '#0D6990'
        }
        return(
            <h1 style={style}>Settings</h1>
        )
    }
}

export default Settings