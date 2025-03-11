import React from 'react';
import './Contact.css';
import theme_pattern from "../../assets/portfolio/brush.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button, notification } from 'antd';

const Contact = () => {

    const showNotification = (type, message, description) => {
        notification.open({
            type: type,
            message: message,
            description: description,
            placement: "topRight",
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "8831ddc5-2643-4e30-b569-5b88d4a9951d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const res = await response.json();

            if (res.success) {
                showNotification("success", "Success", "Your message has been sent successfully!");
                console.log("Success", res);
                alert('Successfully sent')
                event.target.reset();
            } else {
                showNotification("error", "Submission Failed", "Message sending failed. Please try again.");
            }
        } catch (error) {
            showNotification("error", "Error", "Something went wrong. Please check your internet connection.");
            console.error("Fetch error:", error);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" className="theme_pattern" />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's Talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to contact me.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <FaPhone className="contact-icon"/>
                            <span>+980 674 5789</span>
                        </div>
                        <div className='contact-detail'>
                            <FaEnvelope className="contact-icon"/>
                            <span>ryanjosephlarios@gmail.com</span>
                        </div>
                        <div className='contact-detail'>
                            <FaMapMarkerAlt className="contact-icon"/>
                            <span>Philippine Calabarzon, Laguna</span>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className='contact-right'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder="Enter your name." id="name" name="name" required/> 
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder="Enter your email." id="email" name="email" required/>
                    <label htmlFor="message">Write your message here</label>
                    <textarea rows={8} name="message" placeholder="Enter your message..." required/>
                    <Button htmlType="submit" className="contact-submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
