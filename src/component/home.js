import React from 'react';
import logo from '../logo.svg';
import grambling from '../IMG_5719.jpg';
import arkansas from '../IMG_5928.JPG';
import auburn from '../IMG_6731.jpg';
import cover1 from '../IMG_2913.JPG';
import '../App.css';
import '../styles/home.css'
  
function Home (){
    return (
        <div className="App core">
    
            {/* <img class="welcome-image" src={welcome2}></img> */}
            <div class="first-div">
                <h1 class="start-text">OFFICIAL HOME OF <br></br><span class="profile-name">The Balcony Bengals</span></h1>

                <div class="social-holder">
                    <a target="_blank" href="https://twitter.com/BalconyBengals" class="fa fa-twitter social-link first-social"></a>
                    <a target="_blank" href="https://www.instagram.com/balconybengals/" class="fa fa-instagram social-link"></a>
                    <a target="_blank" href="https://www.facebook.com/Balcony-Bengals" class="fa fa-facebook social-link"></a>
                </div>

                <p>Click an Event to view Pictures</p>


                <div class="events-holder">
                    
                    {/* <a target="_blank" href="https://www.dropbox.com/scl/fo/gljcpza06rj9co8cdqyjq/h?dl=0&rlkey=4b4fq0ntpqyf4jlopa7smxggx" class="event">
                        <p>Oxford</p>
                        <img class="cover-image" src={cover1}></img>
                        <p class="date">4/22/2023</p>
                    </a> */}

                    <a target="_blank" href="https://www.dropbox.com/scl/fo/rtr7iy7q6khd7hnmwvlaj/h?rlkey=kk3usovb14q1vvqd26cmqant6&dl=0" class="event">
                        <p>LSU vs Grambling</p>
                        <img class="cover-image" src={grambling}></img>
                        <p>9/8/2023</p>
                    </a>

                    <a target="_blank" href="https://www.dropbox.com/scl/fo/pgbqh9nkakxhd3bgvb2fo/h?dl=0&preview=IMG_5928.JPG&rlkey=t47yz0z6vg2oxarj7m8col13a" class="event">
                        <p>LSU vs Arkansas</p>
                        <img class="cover-image" src={arkansas}></img>
                        <p>9/23/2023</p>
                    </a>

                    <a target="_blank" href="https://www.dropbox.com/scl/fo/qogvzs4fe1kfy96oqkhfx/h?rlkey=9s4ntpv6zutb0bb1ri6gsjied&dl=0" class="event">
                        <p>LSU vs Auburn</p>
                        <img class="cover-image" src={auburn}></img>
                        <p>10/14/2023</p>
                    </a>

                </div>

            </div>
        </div>
      );
}

  
export default Home;