import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Offers = () => {

    return (

        <div className="row d-flex justify-content-center">
            <div>
                <h5>Offers</h5>
                <p className='sub-title'>
                    Discover black friday offers</p>
            </div>
            <Carousel responsive={responsive}>
                <div style={{
                    height: '10rem',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5',
                    backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`
                }}
                    className='me-3'
                >
                </div>
                <div style={{
                    height: '10rem',
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5',
                    padding: '0 5px',
                    backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`,

                }}
                    className='me-3'
                >
                </div>
                <div style={{
                    height: '10rem',
                    objectFit: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5',
                    backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`
                }}
                    className='me-3'
                >
                </div>
                <div style={{
                    height: '10rem',
                    objectFit: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5',
                    backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`
                }}
                    className='me-3'
                >
                </div>
                <div style={{
                    height: '10rem',
                    objectFit: 'cover',
                    overflow: 'hidden',
                    objectPosition: 'center',
                    borderRadius: '1rem',
                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5',
                    backgroundImage: `url(${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`
                }}
                    className='me-3'
                >
                </div>
            </Carousel >
        </div >


    );
};

export default Offers;