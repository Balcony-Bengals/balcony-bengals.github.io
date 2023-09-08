import React from 'react';
import logo from '../logo.svg';
import welcome2 from '../welcome2.jpg';
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

                    <a href="" class="event">
                        <p>Coming Soon...</p>
                        <img class="cover-image" src={welcome2}></img>
                        <p>9/8/2023</p>
                    </a>

                </div>
            </div>
        </div>
      );
}

  
export default Home;