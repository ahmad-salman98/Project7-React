import { style, useTheme } from '@mui/system';
import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 992 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 992, min: 850 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 850, min: 600 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 2
    }
};


const Discover = () => {
    const theme = useTheme();

    return (

        <div className="
        row d-flex justify-content-center mt-5 Discover-div" >
            <div className='explore-jo-title'>
                <h5 >Explore jordan</h5>
                <p className='sub-title'>Know your country better</p>
            </div>
            <Carousel responsive={responsive} className='discover-row'>
                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>



                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>



                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>



                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>



                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>



                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>
                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>
                <div className='discover-card'
                >
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>
            </Carousel >
        </div >


    );
};

export default Discover;