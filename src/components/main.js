import React from 'react';
import Header from './header';
import Footer from './footer';
import './Main.css';


function Main() {
    return (
      <React.Fragment>
        <Header />
        <div className="content">

            <div id="section1" style={{ backgroundColor: '#03467A' }} className="middle-row">
    
                <div className="image-container">
                    <img
                        src="https://play-lh.googleusercontent.com/U_3m_cmIyZxTVoqc9ht-K-KbhhskOHK1YE7wY6v4epfjAwTtgeKkE3Vuc20JzoCQGLNy=w2560-h1440-rw"
                        alt="Section 1"
                        width = "100%"
                        height="800"
                    />
                <div className="buttons-container">
                    <a href='https://play.google.com/store/apps/details?id=com.ArgoGamesRoskilde.Genbrugsspillet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                        <img
                        alt='Get it on Google Play'
                        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                        style={{ width: '240px', height: '100px' }}
                        />
                    </a>

                    <a href="https://apple.co/3QIJ0PL">
                        <img
                        src="https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/da-dk.svg"
                        alt="Download on the App Store"
                        style={{ width: '200px', height: '100px' }}
                        />
                    </a>
                </div>
            </div>

      </div>

          <div id="section2" style={{ backgroundColor: '#03467A' }} className="middle-row">
            ABOUT
          </div>

          <div id="section3" style={{ backgroundColor: '#03467A' }} className="middle-row">
            FEATURES
          </div>

          <div id="section4" style={{ backgroundColor: '#03467A' }} className="middle-row">
            CREATORS
          </div>

        </div>
        <Footer />
      </React.Fragment>
    );
  }
  
  export default Main;