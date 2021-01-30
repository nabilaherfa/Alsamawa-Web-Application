import React, { useState } from 'react';

import './landingpage.css'

const Landingpage = props => {
    const { 
      isLoggedin = false
    } = props;

    const [loggedinInfo, setloggedinInfo] = useState(isLoggedin)

    return(
        <section>
            <div className="circle"></div>
            <div id="landing-page">
                <div class="header">
                    <a href = "#"><img className="logo" src='images/logo.png' alt="logo"/></a>
                    <div className="toggle">
                        
                    </div>
                    <ul>
                        <li><a href= {"/home"}>Layanan</a></li>
                        <li><a href= {"/home"}>Kontak</a></li>
                        <li><a href= {"/home"}>Tentang kami</a></li>
                        <li><a href= {"/home"}>Masuk</a></li>
                    </ul>
                </div>

                <div className="content">
                    <div className="textBox">
                        <h2>Alsamawa</h2>
                        <p><br/>Bergabung bersama kami,<br/>menuju keluarga yang Sakinah Mawaddah wa Rahmah!</p>
                        <a href ={"/home"} onClick={() => setloggedinInfo(true)}>Login</a>
                    </div>
                    <div className="imgBox">
                        <img src='images/pict1.png'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

// class Landingpage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { loggedin : 'false' };
//     }
//     render() {
//         return(
//             <section>
//                 <div id="landing-page">
//                     <div class="header">
//                         <a href = "#"><img className="logo" src='images/logo.png' alt="logo"/></a>
//                         <ul>
//                             <li><a href= {"/home"}>Layanan</a></li>
//                             <li><a href= {"/home"}>Kontak</a></li>
//                             <li><a href= {"/home"}>Tentang kami</a></li>
//                             <li><a href= {"/home"}>Masuk</a></li>
//                         </ul>
//                     </div>

//                     <div className="content">
//                         <div className="textBox">
//                             <h2>Alsamawa</h2>
//                             <p><br/>Bergabung bersama kami,<br/>menuju keluarga yang Sakinah Mawaddah wa Rahmah!</p>
//                             <a href ={"/home"} onClick={() => this.setState({loggedin : true})}>Login</a>
//                         </div>
//                         <div className="imgBox">
//                             <img src='images/pict1.png'/>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }

export default Landingpage