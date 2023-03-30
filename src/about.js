import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import mission from './images/missin.png';
import vision from './images/vision.png';
import values from './images/values.png';
import about from './images/about.png';
import logoabout from './images/abelLogo.png';
import location from './images/icon/location.png';
import email from './images/icon/email.png';
import mobile from './images/icon/mobile.png';
import website from './images/icon/website.png';
import telphone from './images/icon/telphone.png';
import Footer from './footer';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
        duration: 1000,
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        reset: true
    });
    sr.reveal('.about', { interval: 100 });
}, []);
  return ( 
    <div className="contentAbout">
      <div className="about">
        <div className="titlenContent">        
          <h3 className='abouth3 title'>About</h3>
          <p>
            Abel Printing & Advertising Work, founded in 2010, is a full-service integrated advertising solution provider that serves the business and general public printing demands. We provide a wide range of advertising options, such as digital and static out-of-door and in-door advertising items including light boxes and reflective banners, display stands, stickers, automotive branding, wall branding, high-quality posters, and more.
            <br />
            <br />
            The primary purpose of our firm is to deliver the greatest available printing and advertising solution, with an emphasis on quality and precision, resulting in pleased clients with whom we can create long-term business ties. Our firm is built on integrity and honesty, and we take satisfaction in the client connections that has been created, resulting in interdependence and mutual progress. They urge consumers to change their behaviors and become loyal to businesses and services by providing appealing advertising solutions and customer-focused services.
          </p>
        </div>
        <div className="aboutImg">
          <img src={about} alt="" />
        </div>
      </div>
      <div className="missionVisionValues">
        <div className="mission card">
          <div className="titleMission">
            <img src={mission} alt="" />
            <h1 className="title">
              Mission
            </h1>
          </div>
          <div className="contentMision">
            <p>
              To provide the best printing services to our clients by demonstrating responsiveness, diligence, and judgments and building on our culture of excellence
            </p>
          </div>
        </div>
        <div className="vision card">
          <div className="titleVision">
            <img src={vision} alt="" />
            <h1 className="title">
              Vision
            </h1>
          </div>
          <div className="contentVision">
            <p>
              Abel Printing and Advertising Work strives to be the highest quality printing company in the country and strives to exceed the expectations of those we partner with by, being the best printing service provider our clients have ever had, being the best company our employees have ever worked for and to continuously improve all aspects of our business while building on our culture of excellence.
            </p>
          </div>
        </div>
        <div className="values card">
          <div className="titleValues">
            <img src={values} alt="" />
            <h1 className="title">
              Values
            </h1>
          </div>
          <div className="contentValues">
            <div>
              <ul>
                <li>Quality</li>
                <li>Client Oriented</li>
                <li>Excellence</li>
                <li>People</li>
              </ul>
            </div>
            <div>
              <ul>
              <li>Leadership</li>
                <li>Teamwork</li>
                <li>Integrity</li>
                <li>Diversiity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="address">
        <div className="alladdress">
        <div className="logNName">
          <img src={logoabout} alt="" />
          <h3 className="title">
            አቤል የህትመትና ማስታወቂያ ሥራ<br />
            Abel Printing & Advertising Work
          </h3>
        </div>
        <i class="fa-solid fa-location-dot fa-beat" style={{color:"#006eb3"}}></i>

        <address>
          <div className="location">
            <div className="icon">
              <img src={location} alt="" />
            </div>
            <div className="name">
            HayaHulet Mazoria Rebecca BLDG.
            </div>
          </div>
          <br />
          <div className="telphone">
            <div className="icon">
              <img src={telphone} alt="" />
            </div>
            <div className="name">
              <a href="tel:+251-11-636-2041">
                +251-11-636-2041
              </a>
            </div>
          </div>
          <div className="phone">
            <div className="icon">
              <img src={mobile} alt="" />
            </div>
            <div className="name">
              <a href="tel:+251-930-003-3807">
                +251-930-003-3807
              </a>
              <a href="tel:+251-911-604-482">
                +251-911-604-482
              </a> 
            </div>
          </div>
          <div className="email">
            <div className="icon">
              <img src={email} alt="" />
            </div>
            <div className="name">
              <a href="mailto: abeladvert@yahoo.com">
                abeladvert@yahoo.com
              </a>
              <a href="mailto: getumrt2435@gmail.com">
                getumrt2435@gmail.com
              </a>
            </div>
          </div>
          <div className="website">
          <div className="icon">
            <img src={website} alt="" />
          </div>
          <div className="name">
            <a href="#">
              www.abeladvert.com
            </a>
          </div>
          </div>
        </address>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;