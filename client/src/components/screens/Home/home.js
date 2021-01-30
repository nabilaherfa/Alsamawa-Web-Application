import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './home.css'

class Home extends Component {
    render() {
        const headerstyle = {
            marginTop: '4%',
            marginLeft: '6%',
            fontSize: '2.5rem',
            fontWeight: '600',
            width: '80%',
            marginBottom: '1rem',
            color: '#0D6990'
        }
        return(
            <section>
                <div id="home">
                    <div class="w3-row">
                        <div class="w3-col m8 w3-margin-right">
                        <h1 style={headerstyle}>Beranda</h1>
                        <div class="judul-materi w3-padding">
                            <div class="w3-round-large">
                                <div class="w3-round-large">
                                <div class="w3-round-large">
                                    <img src="images/chat1.jpg" style={{width: "45vw"}}></img>
                                </div>
                                <div class="w3-round-large">
                                    <img src="images/chat2.jpg" style={{width: "45vw"}}></img>
                                </div>
                                    <img src="images/chat3.jpg" style={{width: "45vw"}}></img>
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
                                <h5>Ujian</h5>
                                <img src="images/kelas-total-tugas.jpg" style={{width: "250px"}}></img>

                            </div>
                            <p></p>
                            <div class="right-bar w3-padding" style={{color: "#0D6990"}}>
                                <img src="images/taaruf-lock.jpg" style={{width: "230px"}}></img>
                            </div>                            
                        </div>

            

                    </div>
                </div>
            </section>
        )
    }
}

export default Home