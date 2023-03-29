import Footer from "./footer";
import contact from "./images/contact.png"

const Contact = () => {
    return ( 
        <div className="contentContact">
            <div className="contactContanier">
                <div className="form">
                    <form action="">
                        <h2>Contact Us </h2>
                        <div className="input-group">
                            <label>First Name:</label>
                            <input type="text" placeholder="Jhon"/>
                        </div>

                        <div className="input-group">
                            <label>Last Name:</label>
                            <input type="text" placeholder="Doe"/>
                        </div>

                        <div className="input-group">
                            <label>Phone Number:</label>
                            <input type="number" placeholder="+251930033807"/>
                        </div>

                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" placeholder="abeladvert@yahoo.com" className="email-input"/>
                        </div>

                        <div className="input-group">
                            <label>Message:</label>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className="input-group">
                            <button className="btnSubmit">Submitt</button>
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