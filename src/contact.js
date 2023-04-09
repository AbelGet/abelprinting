import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Footer from "./footer";
import contact from "./images/contact.png"
import emailjs from '@emailjs/browser';
import success from "./images/success.png";

const Contact = () => {
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        const sr = ScrollReveal({
            duration: 1000,
            delay: 200,
            distance: '30px',
            origin: 'bottom',
            reset: true
        });
        sr.reveal('.contactContanier', { interval: 100 });
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lg1gjsk', 'template_uowwfns', form.current, 'TCUZuvjfYwPZR8vOw')
        .then((result) => {
            // console.log(result.text);
            setShowDiv(true);
            setTimeout(() => {
                setShowDiv(false);
            }, 5000);              
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset();
    };
    return (
        <div className="contentContact">
            <div className="contactContanier">
                <div className="form">
                    <form action="" ref={form} onSubmit={sendEmail}>
                        <h2 className="title">Contact Us </h2>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input type="text" placeholder="Jhon" name='user_fname'/>
                        </div>

                        <div className="input-group">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Doe" name='user_lname'/>
                        </div>

                        <div className="input-group">
                            <label>Phone Number:</label>
                            <input type="number" placeholder="+251930033807" name='user_phno'/>
                        </div>

                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" placeholder="abeladvert@yahoo.com" className="email-input" name='user_email'/>
                        </div>

                        <div className="input-group">
                            <label>Message:</label>
                            <textarea placeholder="Message" name='user_message' rows="200"></textarea>
                        </div>
                        <div className="input-group-btn">
                            <div>
                                <button className="btnSubmit" type='submite'>Submitt</button>
                            </div>
                            
                            { showDiv && <div className='success'>
                                <img src={success} alt="Success" />
                                <label>You have successfully send email</label>
                            </div>}
                        </div>
                    </form>
                </div>
                <div className="contactImg">
                    <img src={contact} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
} 
export default Contact;