import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import Header from '../Home/Header';
import "./con-about.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PhonelinkRingOutlinedIcon from '@mui/icons-material/PhonelinkRingOutlined';


const Contact = () => {
    return (<>
        <Header />
        <div >

            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_phone">
                                    <PhonelinkRingOutlinedIcon sx={{
                                        width: '2em', height: '2em',
                                        '&:hover': {
                                            color: '#023047'
                                        }
                                    }} />
                                </span>
                                <h4>Phone</h4>
                                <p>+962 77 80 86 352</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_pin_alt">
                                    <PlaceOutlinedIcon sx={{
                                        width: '2em', height: '2em',
                                        '&:hover': {
                                            color: '#023047'
                                        }

                                    }} />
                                </span>
                                <h4>Address</h4>
                                <p>60-49 Jordan_Zarqa New Zarqa Road 11378</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_clock_alt">
                                    <AccessAlarmIcon sx={{
                                        width: '2em', height: '2em',
                                        '&:hover': {
                                            color: '#023047'
                                        }

                                    }} />
                                </span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_mail_alt" ><MailOutlineIcon sx={{
                                    width: '2em', height: '2em',
                                    '&:hover': {
                                        color: '#023047'
                                    }

                                }} /> </span>
                                <h4>Email</h4>
                                <p>support@dokkaneh.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="map">
                <iframe src="https://maps.google.com/maps?q=souq%20bab%20al%20madina&t=&z=13&ie=UTF8&iwloc=&output=embed" height="500" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title='mapabout'></iframe>
                <div class="map-inside">
                    <i class="icon_pin"></i>
                    <div class="inside-widget">
                        <h4>Zarqa</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="contact-form spad" style={{ padding: '5rem 12%' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <div class="col-lg-12 text-center">
                                <textarea placeholder="Your message"></textarea>
                                <Button variant="contained"
                                    endIcon={<SendIcon />}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#f77f00',
                                            color: '#023047'
                                        }
                                    }}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </>
    );
};

export default Contact;