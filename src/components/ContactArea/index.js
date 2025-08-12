import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props) => {
    return (
        <section className="tp-contact-form-area section-padding">
            <div className="container">
                <div className="tp-contact-form-wrap">
                    <div className="tp-section-title">
                        <h2>Send me a Message</h2>
                        <p>Your email address will not be published. All fields are required</p>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactArea;