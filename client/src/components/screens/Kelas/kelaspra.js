import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './kelas.css'

class KelasPra extends Component {
    render() {
        const headerstyle = {
            fontSize: '2.5rem',
            fontWeight: '600',
            textDecoration: 'solid',
            color: '#0D6990'
        }
        return(
            <section>
                <div id="kelas">
                    <div class="w3-row">
                        <div class="w3-col m8 w3-margin-right">
                        <h1 style={headerstyle}>Kelas</h1>
                        <div class="judul-materi w3-padding">
                            <div class="w3-padding w3-round-large">
                                <div class="w3-round-large">
                                    <h2 style={{color: "#0D6990"}}>Pemahaman Pernikahan</h2>

                                    <div class="w3-display-container">
                                        <img src='images/materi1.png' class="materi1 center"/>
                                        <div class="w3-display-topleft w3-container w3-padding-16 w3-margin-left">
                                            <h4 style={{margin: "10px"}}>Pernikahan Menurut Agama</h4>
                                        </div>
                                        <div class="w3-display-middle w3-large w3-padding">
                                            <img src="images/play.png" style={{width: "50px"}}></img>
                                        </div>
                                    </div>
                                    <p></p>
                                    <div class="w3-display-container">
                                        <img src='images/materi2.png' class="materi1 center"/>
                                        <div class="w3-display-topleft w3-container w3-padding-16 w3-margin-left">
                                            <h4 style={{margin: "10px"}}>Syarat Menikah</h4>
                                        </div>
                                        <div class="w3-display-middle w3-large w3-padding">
                                        <Link to="/syaratmenikah">
                                            <img src="images/play.png" style={{width: "50px"}}></img>
                                        </Link>
                                        </div>
                                    </div>
                                    <p></p>
                                    <div class="w3-display-container">
                                        <img src='images/materi3.png' class="materi1 center"/>
                                        <div class="w3-display-topleft w3-container w3-padding-16 w3-margin-left">
                                            <h4 style={{margin: "10px"}}>Larangan dalam Pernikahan</h4>
                                        </div>
                                        <div class="w3-display-middle w3-large w3-padding">
                                            <img src="images/play.png" style={{width: "50px"}}></img>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        </div>

                        <div class="w3-col m3">
                            <img src="images/search.png" style={{width: "325px"}}></img>
                            <div class="right-bar w3-padding" style={{color: "#0D6990"}}>
                                <h3 style={{align: "center"}}>SEKOLAH PRA-NIKAH</h3>
                                <p>
                                </p>
                                <h5>Total Progress</h5>
                                <img src="images/kelas-total-progress.jpg" style={{width: "220px"}}></img>
                                <h5>Materi</h5>
                                <img src="images/kelas-total-materi1.jpg" style={{width: "250px"}}></img>
                                <img src="images/kelas-total-materi2.jpg" style={{width: "250px"}}></img>
                                <img src="images/kelas-total-materi3.jpg" style={{width: "250px"}}></img>
                                <h5>Tugas</h5>
                                <img src="images/kelas-total-tugas.jpg" style={{width: "250px"}}></img>
                                <img src="images/kelas-down.png" style={{width: "240px"}}></img>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default KelasPra