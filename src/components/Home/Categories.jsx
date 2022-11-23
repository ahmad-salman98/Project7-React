import { style, useTheme } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 992 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 992, min: 850 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 850, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 1
    }
};


const Categories = () => {

    return (

        <div className="row d-flex justify-content-center mt-5 pt-5">
            <h5 className='fw-bold'>Browse by category</h5>
            <Carousel responsive={responsive}>
                <div className='me-3 category'>
                    <img
                        src={`${`https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>City</h6>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https://www.legendsofamerica.com/wp-content/uploads/2020/03/UnitedStatesRegions.jpg`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Region</h6>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Landmark</h6>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https://images.pexels.com/photos/4916146/pexels-photo-4916146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>District</h6>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Hotel</h6>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https://images.pexels.com/photos/8828681/pexels-photo-8828681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Country</h6>
                </div>


            </Carousel >
        </div >


    );
};

export default Categories;