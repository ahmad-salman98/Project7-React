import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../style.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 850 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 850, min: 576 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 576, min: 480 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};


const Loved = () => {

    return (

        <div className="row d-flex justify-content-center mt-5 pt-5">
            <h5 className='fw-bold'>Homes guests love</h5>
            <Carousel responsive={responsive}>
                <div className='me-3 loved-card'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 >San fransisco villa</h6>

                    <p className='loved-desc' >
                        Down town, San franisco, USA
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            55 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.5
                        </span>
                        <p> Very good</p> -
                        <p>  971 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 >San fransisco villa</h6>

                    <p className='loved-desc' >
                        Down town, San franisco, USA
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            55 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.5
                        </span>
                        <p> Very good</p> -
                        <p>  971 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 >San fransisco villa</h6>

                    <p className='loved-desc' >
                        Down town, San franisco, USA
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            55 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.5
                        </span>
                        <p> Very good</p> -
                        <p>  971 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 >San fransisco villa</h6>

                    <p className='loved-desc' >
                        Down town, San franisco, USA
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            55 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.5
                        </span>
                        <p> Very good</p> -
                        <p>  971 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https:images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 >San fransisco villa</h6>

                    <p className='loved-desc' >
                        Down town, San franisco, USA
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            55 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.5
                        </span>
                        <p> Very good</p> -
                        <p>  971 reviews</p>
                    </div>

                </div>






            </Carousel >
        </div >


    );
};

export default Loved;