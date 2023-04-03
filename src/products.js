import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import product1 from './images/product1.png';
import product2 from './images/product2.png';
import product3 from './images/product3.png';
import product4 from './images/product4.png';
import product5 from './images/product5.png';
import product05 from './images/product05.png';
import product6 from './images/product6.png';
import product7 from './images/product7.png';
import product07 from './images/product07.png';
import product8 from './images/product8.png';
import product9 from './images/product9.jpg';

import Vehicle1 from './images/large/Vehicle Branding 1.png';
import Vehicle2 from './images/large/Vehicle Branding 2.png';
import Vehicle3 from './images/large/Vehicle Branding 3.png';
import Vehicle4 from './images/large/Vehicle Branding 4.png';
import roll from './images/large/roll.png';
import wallBranding from './images/large/Wall Branding.png';
import Footer from './footer';


const Products = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            duration: 1000,
            delay: 200,
            distance: '30px',
            origin: 'bottom',
            reset: true
        });
        sr.reveal('.firstParagraphContent', { interval: 100 });
        // sr.reveal('.paragraph2Content', { interval: 200 });
    }, []);
    return ( 
        <div className="contentProducts">
            <div className="productsContent">
                <div className="firstParagraphContent">
                    <div className="inPrintingProductImg">
                        <img src={product1} alt=""/>
                        <img src={product2} alt=""/>
                    </div>
                    <div className="paragraph">
                        <h2 className="title">Printing Products</h2>
                        <p>
                            Ranging from magazines, Brochures, Posters, Calendars,  Annual reports, and  Manuals. We are equipped with extensive capacity prints that resonate with our client’s brand and products and which match globally acceptable standards. Our professional services guarantee our clientele of impeccable precision and timely delivery. Complementing the printing company,  we boast of a thoroughly garnished finishing division equipped with an array of the most advanced machinery and equipment. 
                            <br /> 
                            <br />
                            In addition to printing and advertising works; our company widens its dimension. We announce that we started opening our own garment workshops with a team of qualified and skilled staff who have been working on different works such as t-shirts, marketing bags, flags, scarfs, neckties, and many more with quality, perfect timing, and reasonable pricing.
                        </p>
                    </div>
                    <div className="inPrintingProductImg2">
                        <img src={product7} alt=""/>
                        <img src={product8} alt=""/>
                    </div>
                </div>
                <div className="printingProductImg">
                    <img src={product3} alt=""/>
                    <img src={product4} alt=""/>
                    <img src={product5} alt=""/>
                    <img src={product6} alt=""/>
                </div>
                <div className="paragraph2Content">
                    <div className="paragraph2">
                        <h2 className="title">Large Format Printing </h2>
                        <p>
                            If you dream to go,  we’ve got you covered. For special events,  trade shows,  sporting events, and grand openings our banners are printed on strong and durable media  We provide many large-format printing services that can suit your unique requirement. With high resolution,  vibrant colors,  durable materials, UV  gloss protection, and custom finishes you can count on a professional quality,  large format piece.  We can print banners up to 3m. wide and we also print a single large posterior mixed artwork at once. We print on a wide range of materials that can accommodate long-term, outdoor use.
                            <br /> 
                            <br /> 
                            Performed Large size Wall Branding, Banners, Car Branding, Indoor, and Outdoor Stickers, Rollup Banner/Gray back, X-Stand, Stage Back and etc...
                        </p>
                    </div>
                    <img src={product9} alt="" className='bigImg'/>
                </div>

                <div className="productName">
                    <h1 className="title">Product </h1>
                    <div className="row1">
                        <div>
                            <img src={product3} alt=""/>
                            <p>Agenda</p>
                        </div>
                        
                        <div>
                            <img src={product4} alt=""/>
                            <p>Brosher</p>
                        </div>

                        <div>
                            <img src={product05} alt=""/>
                            <p>T-shirt & Cape Printing</p>
                        </div>
                    </div>
                    <div className="row2">
                        <div>
                            <img src={product1} alt=""/><br />
                            <p>Magazine</p>
                        </div>
                        
                        <div>
                            <img src={product2} alt=""/><br />
                            <p>Calendar</p>
                        </div>
                        <div>
                            <img src={product07} alt=""/><br />
                            <p>Revan & Tie</p>
                        </div>
                        
                    </div>

                    <h1 className="title"> Vehicle Branding </h1>
                    
                    <div className="lrow2">
                        <div>
                            <img src={Vehicle3} alt="" />
                        </div>
                        <div>
                            <img src={Vehicle4} alt="" />
                            
                        </div>
                    </div>
                    <div className="lrow1">
                        <div>
                            <img src={Vehicle4} alt="" />
                        </div>
                        <div>
                            <img src={Vehicle1} alt="" />
                            
                        </div>
                        <div>
                            <img src={Vehicle2} alt="" />                           
                        </div>
                    </div>

                    <h1 className="title"> Wall Branding </h1>

                    <div className="lrow3">
                        <div>
                            <img src={roll} alt="" />
                        </div>
                        <div>
                            <img src={wallBranding} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Products;