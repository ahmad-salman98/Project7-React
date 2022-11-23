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
                    style={{ backgroundImage: `url(${`https://images.pexels.com/photos/3611545/pexels-photo-3611545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Dubai</h5>
                </div>


                <div className='city'
                    style={{ backgroundImage: `url(${`https://images.pexels.com/photos/11195793/pexels-photo-11195793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`, }}>
                    <h5 className='m-0 '>Petra</h5>
                </div>

            </div>


            <div className="cities-group2">
                <div className='city'
                    style={{ backgroundImage: `url(${`https://images.pexels.com/photos/1796706/pexels-photo-1796706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>London</h5>
                </div>


                <div className='city'
                    style={{ backgroundImage: `url(${`https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Paris</h5>
                </div>
                <div className='city'
                    style={{ backgroundImage: `url(${`https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})` }}>
                    <h5 className='m-0 '>Italy</h5>
                </div>
            </div>




        </div >


    );
};

export default Cities;