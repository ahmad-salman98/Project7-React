import React from 'react';
import "react-multi-carousel/lib/styles.css";
import "../../style.css"
import axios from "axios";










const Cities = () => {



























    return (

        <div className="row d-flex justify-content-center ">

            <h5 className='fw-bold'>Cities you may like</h5>

            <div className="cities-group1">

                <div className='city'
                    style={{ backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Hotels</h5>
                </div>


                <div className='city'
                    style={{ backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`, }}>
                    <h5 className='m-0 '>Hotels</h5>
                </div>

            </div>


            <div className="cities-group2">
                <div className='city'
                    style={{ backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Hotels</h5>
                </div>


                <div className='city'
                    style={{ backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Hotels</h5>
                </div>
                <div className='city'
                    style={{ backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Hotels</h5>
                </div>
            </div>




        </div >


    );
};

export default Cities;