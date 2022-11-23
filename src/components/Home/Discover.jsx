import { style, useTheme } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

    const [country, setCountry] = useState('');
    const [countryPre, setCountryPre] = useState('');
    const [statesArr, setStatesArr] = useState([]);
    const [joStates, setJoStates] = useState([]);
    const [statesInfo, setStatesInfo] = useState([]);


    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setCountry(data.country_name);
                setCountryPre(data.country);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);


    useEffect(() => {
        const states = {
            method: 'GET',
            url: 'https://referential.p.rapidapi.com/v1/state',
            params: { iso_a2: countryPre, limit: '25' },
            headers: {
                'X-RapidAPI-Key': '1554a29a74msh7a16e3977c11e90p1fca56jsnb16561f34dc1',
                'X-RapidAPI-Host': 'referential.p.rapidapi.com'
            }
        };

        axios.request(states).then(function (response) {
            setStatesArr((response.data));
            statesArr.forEach(e => {
                const [first, ...rest] = e.value.split(' ');
                joStates.push(first);
            });

        }).catch(function (error) {
            console.error(error);
        });


    }, []);


    useEffect(() => {
        console.log('jo states length is ' + joStates.length);
        // joStates.forEach(element => {
        //     console.log('state is ' + element);
        //     const info = {
        //         method: 'GET',
        //         url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        //         params: { locale: 'en-gb', name: element },
        //         headers: {
        //             'X-RapidAPI-Key': '1554a29a74msh7a16e3977c11e90p1fca56jsnb16561f34dc1',
        //             'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        //         }
        //     };

        //     axios.request(info).then(function (response) {
        //         console.log(response.data);
        //         statesInfo.push(response.data)
        //     }).catch(function (error) {
        //         console.error(error);
        //     });
        // });

    }, [joStates])





    const card = joStates.map(e => (

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

    ))



    return (

        <div className="
        row d-flex justify-content-center mt-5 Discover-div" >
            <div className='explore-jo-title'>
                <h5 >Explore {country} </h5>
                <p className='sub-title'>Know your country better</p>
            </div>
            <Carousel responsive={responsive} className='discover-row'>

                <div className='discover-card'
                >
                    <img
                        src={`${`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3f/20/5e/exterior.jpg?w=1200&h=-1&s=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Amman</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 568 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://lp-cms-production.imgix.net/2019-06/78ea5b757571d23162ea4f4435fad5fc-ajloun-forest-reserve.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1946`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Ajloun</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 132 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/66/57/2c/caption.jpg?w=500&h=400&s=1`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Salt</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 221 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://petra.gov.jo/upload/634909130884123005.jpg`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Jarash</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 117 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://media-cdn.tripadvisor.com/media/photo-s/21/c8/54/d5/cloud7-residence-ayla.jpg`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Aqaba</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 729 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://www.almamlakatv.com/images/articles/big/2022/1/61d43e774ce7a.jpeg`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Tafileh</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 74 places</p>
                </div>


                <div className='discover-card'
                >
                    <img
                        src={`${`https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/5e/e0/ed/caption.jpg?w=700&h=500&s=1&cx=654&cy=434&chk=v1_4d49a498021cb829843c`}`}
                        alt="hhh"
                        style={{ height: '8rem', width: '100%', marginBottom: '8px', objectFit: 'cover' }}
                    />
                    <h6 className='m-0'>Dead sea</h6>
                    <p style={{

                        fontSize: '12px'
                    }}> 812 places</p>
                </div>


            </Carousel >
        </div >


    );
};

export default Discover;