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
                        src={`${`https://t-cf.bstatic.com/xdata/images/hotel/square600/123801934.webp?k=27073a18101dd5a4eefc76251f7d476be72e19ed03e98819f2d94667dd60f31a&o=&s=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6> San fransisco villa</h6>

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
                        src={`${`https://t-cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 className='text-truncate' >6 Continents Apartments by Prague Residences
                    </h6>

                    <p className='loved-desc text-truncate' >
                        Husova 12, Prague, 11000, Czech Republic
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            102 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            9.1
                        </span>
                        <p> superb</p> -
                        <p>  1021 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https://t-cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 className='text-truncate ' >numa I Vita Apartments
                    </h6>

                    <p className='loved-desc text-truncate' >
                        Viale Milton, 7, 50129 Florence, Italy
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            89 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.1
                        </span>
                        <p> fabulos</p> -
                        <p>  215 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https://t-cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 className='text-truncate' >Aparthotel Stare Miasto
                    </h6>

                    <p className='loved-desc text-truncate' >
                        Gołębia 2, Old Town, 31-007 Kraków, Poland
                    </p>

                    <p className='loved-desc' > Starts from
                        <b className='loved-price'>
                            94 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.7
                        </span>
                        <p> fabulos</p> -
                        <p>  2303 reviews</p>
                    </div>

                </div>


                <div className='me-3 loved-card'>
                    <img
                        src={`${`https://t-cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1`}`}
                        alt="hhh"
                        className='loved-img'
                    />

                    <h6 className='text-truncate' >3 Epoques Apartments by Prague Residences

                    </h6>

                    <p className='loved-desc text-truncate' >
                        Retezova 3, Prague, 11000, Czech Republic
                    </p>

                    <p className='loved-desc ' > Starts from
                        <b className='loved-price'>
                            115 JOD
                        </b>
                    </p>
                    <div className='review '>
                        <span className='rate'>
                            8.8
                        </span>
                        <p> fabulos</p> -
                        <p>  418 reviews</p>
                    </div>

                </div>






            </Carousel >
        </div >


    );
};

export default Loved;