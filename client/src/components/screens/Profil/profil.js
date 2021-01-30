import React, { Component } from 'react';

class Profil extends Component {
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
        return(
            <h1 style = {style}>Profil</h1>
        )
    }
}

export default Profil