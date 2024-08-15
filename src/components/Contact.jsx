import React from 'react';
import NavBar from './NavBar';
import { IoCallOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import '../Contact.css';
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <span className="main">Home</span> <span className='active'> / Contact</span>
        <div className="outside-container">
          <div className="contact-details">
            <div className="header">
              <div className="img-container">
                <IoCallOutline className='icon' />
              </div>
              <p className="header-details">Call To Us</p>
            </div>
            <p className="availability">We are available 24/7, 7 days a week.</p>
            <p className="phone-number">Phone: +8801611112222</p>
            <hr className="line-break" />
            <div className="header">
              <div className="img-container">
                <GoMail className='icon' />
              </div>
              <p className="header-details">Write To Us</p>
            </div>
            <p className="availability">Fill out our form and we will contact you within 24 hours</p>
            <p className="phone-number">Emails: customer@exclusive.com</p>
            <p className="phone-number">Emails: support@exclusive.com</p>
          </div>
          <div className="inputs-field">
            <form>
            <div className="inputs">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder='Your Email *' />
                <input type="tel" placeholder='Your Phone *' />
            </div>
            <textarea name="message" className='message' placeholder='Your Message'/>
            <input type="submit" className='btn' value="Send Message" />
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </>
  );
};

export default Contact;
