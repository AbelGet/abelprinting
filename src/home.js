import logo from './images/abelLogo.png';
import printer from './images/printer.png';
import ploter from './images/ploter.png';
import tshirt from './images/tshirt.png';
import mug from './images/mug.png';
import summuryimg1 from './images/summury_img1.png';
import summuryimg2 from './images/summury_img2.png';
import summuryimg3 from './images/summury_img3.png';
import Footer from './footer';

const Home = () => {
    return ( 
        <div className="contentHome">
            <div className="frontpic">
                <div className="allDiv">
                    <div className="bottom">
                        <div className='div1'>
                            <div className="sidePic1 sidePic">
                                <img src={printer} alt=""/>
                            </div>
                            <div className="sidePic2 sidePic">
                                <img src={ploter} alt=""/>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className="sidePic3 sidePic">
                                <img src={tshirt} alt=""/>
                            </div>
                            <div className="sidePic4 sidePic">
                                <img src={mug } alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="midle"></div>
                    <div className="top">
                        <div className="logCircle">
                            <img src={logo} alt="" />
                        </div>
                        <div className="logoTitle">
                            <h2>
                                Abel Printing and Advertising Work
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="executiveSummary">
                <div className="summaryTitle">
                    <h2>Executive <br></br>Summary</h2>
                </div>
                <div className="contentSummary">
                    <p>
                        Abel Printing & Advertising Work is a budding state of the art full service printing and advertising company that was established in 2010. It is focused on the printing needs of the corporate sector and the general public. It is our intention to provide the best possible printing and advertising solution where attention is given to quality and detail, resulting in satisfied clients with whom we have lasting business relationships. The foundation of our business is integrity and honesty, we take pride in the client relationships that have developed resulting in interdependency and mutual growth.
                    </p>
                </div>
                <div className="imgs">
                    <img src={summuryimg1} alt="" />
                    <img src={summuryimg2} alt="" />
                    <img src={summuryimg3} alt="" />
                </div>
            </div>
            <Footer />
            
        </div>
    );
}
export default Home;