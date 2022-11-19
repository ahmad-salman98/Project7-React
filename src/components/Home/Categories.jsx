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
            <h5 className='fw-bold'>Browse by property type</h5>
            <Carousel responsive={responsive}>
                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Hotels</h6>
                    <p  > 568 hotels</p>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Villas</h6>
                    <p  > 568 villas</p>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Villas</h6>
                    <p  > 568 villas</p>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Villas</h6>
                    <p  > 568 villas</p>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Villas</h6>
                    <p  > 568 villas</p>
                </div>


                <div className='me-3 category'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='category-img'
                    />
                    <h6 className='m-0'>Villas</h6>
                    <p  > 568 villas</p>
                </div>


            </Carousel >
        </div >


    );
};

export default Categories;