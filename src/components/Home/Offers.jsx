import { Button } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../../style.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Offers = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div>
                <h5>Offers</h5>
                <p className="sub-title">Discover black friday offers</p>
            </div>
            <Carousel responsive={responsive}>
                <div
                    style={{
                        backgroundImage: `url(${`https://q-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o=`})`,
                    }}
                    className="me-3 offers-card"
                >
                    <h6>Save 15% with Late Escape Deals </h6>
                    <p>Tick one more destination off your wishlist </p>
                    <Link to="hotels" className="link">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                "&:hover": { backgroundColor: "#f77f00", color: "#023047" },
                            }}
                        >
                            Explore now
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${`https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png`})`,
                    }}
                    className="me-3 offers-card"
                >
                    <h6>Escape for a while</h6>
                    <p>Enjoy the freedom of an extended stay on CONFY.com</p>
                    <Link to="hotels" className="link">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                "&:hover": { backgroundColor: "#f77f00", color: "#023047" },
                            }}
                        >
                            Explore now
                        </Button>
                    </Link>

                </div>
                <div
                    style={{
                        backgroundImage: `url(${`https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`})`,
                    }}
                    className="me-3 offers-card"
                >
                    <h6>Every thing you need is in one app
                    </h6>
                    <p>join us for free to find the perfect stay for you</p>

                    <Link to="hotels" className="link">
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                "&:hover": { backgroundColor: "#f77f00", color: "#023047" },
                            }}
                        >
                            Join us
                        </Button>
                    </Link>


                </div>
            </Carousel>
        </div>
    );
};

export default Offers;
