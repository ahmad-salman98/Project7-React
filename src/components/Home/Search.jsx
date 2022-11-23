import React from 'react';
import { Autocomplete, Button, Fab, InputAdornment, TextField, useTheme } from '@mui/material';
import { ArrowForward, Bed } from '@mui/icons-material';
import PaperContentComponent from './Date';
import { FormControl } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';


const Search = () => {
    const theme = useTheme();

    const [date, setDate] = React.useState(dayjs());


    const options = [
        { label: 'The Godfather', id: 1 },
        { label: 'Pulp Fiction', id: 2 },
    ];

    const handleChange = (newValue) => {
        setDate(newValue);
    };


    return (
        <section style={{ color: '#1f1212', padding: ' 5rem 12%' }}  >




            <video id="background-video" autoPlay loop muted >
                <source src="./video.mp4" type="video/mp4" />
            </video>




            <div className=' container align-items-center h-100 ' >
                <div className=" row mb-5 ">
                    <div className='col-12 header-text' > <h1 className='fw-bold'> Find your Comfort Stay</h1></div>
                    <div className='col-12 header-text' > Search amoung thousands of hotels, homes, and much more..</div>
                </div>

                <div className='dlex-column d-flex row'
                    style={{
                        padding: 0,
                        borderRadius: '8px',
                    }}>
                    {/* <div className="col-md-4 col-sm-6 col-12">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={options}
                            fullWidth
                            variant="outlined"
                            sx={{
                                border: `2px solid ${theme.palette.secondary.main} `,

                                borderRadius: '8px',
                            }}

                            renderInput={(params) =>
                                <TextField {...params}
                                    placeholder='Search a hotel..'
                                    variant="outlined"
                                    sx={{
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                    }}
                                />}

                        />
                    </div>


                    <div className="col-md-4 col-sm-6 col-12">
                        <PaperContentComponent />
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 d-flex  py-2">
                        <Button className="btn-primary" variant="outlined" href="#outlined-buttons"
                            style={{
                                justifyContent: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                height: '100%',
                            }}>
                            <ManageSearchIcon />

                            Search
                        </Button> */}


                    {/* </div> */}
                    <Link to='/hotels' style={{ textDecoration: 'none' }}>
                        <Button variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#f77f00',
                                    color: '#023047'
                                },
                            }}
                            className='btn-home col-lg-4 col-md-5 col-sm-6 col-12'
                        >
                            Reserve Hotels Now
                        </Button>
                    </Link>
                </div>
            </div>
        </section >

    );
};
export default Search
