import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './kelaspra1.css'

class KelasPra1 extends Component {

    render() {
        return(
            <section>
                <div id="kelas">
                    <div class="w3-row">
                        <div class="w3-col m8 w3-margin-right">
                        <h1 style={{color: "#0D6990"}}>Kelas</h1>
                        <div class="judul-materi w3-padding">
                            <div class="w3-padding w3-round-large">
                                <div class="w3-round-large">
                                    <h2 style={{color: "#0D6990"}}>Syarat Menikah</h2>

                                    <div class="w3-display-container">
                                        <img src='images/materi2.png' class="materi1 center"/>
                                        <div class="w3-display-middle w3-large w3-padding">
                                        <a target="_blank" href="https://www.youtube.com/watch?v=4ByrBPcOZAw">
                                            <img src="images/play.png" style={{width: "50px"}}></img>
                                        </a>
                                        </div>
                                    </div>

                                    <div style={{color: "#000"}}>
                                        <p></p>
                                        <p>Dalam aqad nikah ada beberapa syarat, rukun dan kewajiban yang harus dipenuhi, yaitu adanya:</p>
                                        <p>1. Rasa suka sama suka dari kedua calon mempelai</p>
                                        <p>2. Izin dari wali 3. Saksi-saksi (minimal dua saksi yang adil)</p>
                                        <p>4. Mahar</p>
                                        <p>5. Ijab Qabul</p>
                                        <p></p>
                                        <a target="_blank" href="https://almanhaj.or.id/3230-syarat-rukun-dan-kewajiban-dalam-aqad-nikah.html">
                                        <h4 style={{color: "#0D6990"}}>Baca Selengkapnya</h4>
                                        </a>
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

export default KelasPra1