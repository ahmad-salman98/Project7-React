import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Bed, MeetingRoom } from '@mui/icons-material';
import { Form, FormControl } from 'react-bootstrap';
import { Button, InputLabel, MenuItem, TextField } from '@mui/material';
import axios from "axios";
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Date from '../Home/Date';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import Header from '../Home/Header';
import SortIcon from '@mui/icons-material/Sort';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';





export default function Hotels() {
    const [results, setResults] = React.useState([])
    const [range, setRange] = React.useState([null, null]);
    const [orderBy, setOrderBy] = React.useState("");
    const [adults, setAdults] = React.useState(Number);
    const [children, setChildren] = React.useState(Number);
    const [rooms, setRooms] = React.useState(Number);


    function handleSearch() {

        const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
            params: {
                checkout_date: range[1],
                units: 'metric',
                dest_id: '-1746443',
                dest_type: 'city',
                locale: 'en-gb',
                adults_number: adults,
                order_by: orderBy,
                filter_by_currency: 'JOD',
                checkin_date: range[0],
                room_number: rooms,
                children_number: children,
            },
            headers: {
                'X-RapidAPI-Key': '2af1caf127msheeee580ca31cd96p195b96jsn48a2afdd443d',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setResults(response.data)
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }















    return (
        <>
            <Header />
            <div className='hotels '>
                <div className='sidebar-container'>
                    <Box className='sidebar'>
                        <nav aria-label="main mailbox folders">
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Bed />
                                        </ListItemIcon>
                                        <TextField
                                            id="standard-basic"
                                            placeholder='Destination / property name'
                                            variant="standard"
                                            size='small'
                                        />
                                    </ListItemButton>
                                </ListItem>



                                {/* Range  */}

                                <ListItem disablePadding >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DateRangeOutlinedIcon />
                                        </ListItemIcon>


                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                            localeText={{ start: 'Check-in', end: 'Check-out' }}
                                        >
                                            <DateRangePicker
                                                value={range}
                                                onChange={(newValue) => {
                                                    let checkin = (newValue[0].$y + '-' + (newValue[0].$M + 1) + '-' + newValue[0].$D);

                                                    let checkout = (newValue[1].$y + '-' + (newValue[1].$M + 1) + '-' + newValue[1].$D);
                                                    console.log(checkin, checkout);
                                                    console.log(range)
                                                    setRange([checkin, checkout]);
                                                }}
                                                renderInput={(startProps, endProps) => (
                                                    <React.Fragment>
                                                        <TextField {...startProps} />
                                                        <TextField {...endProps} />
                                                    </React.Fragment>
                                                )}
                                            />
                                        </LocalizationProvider>

                                    </ListItemButton>
                                </ListItem>


                                {/* adults  */}
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <EmojiPeopleOutlinedIcon />
                                        </ListItemIcon>
                                        <TextField
                                            id="standard-basic"
                                            placeholder='Adults'
                                            variant="standard"
                                            size='small'
                                            type="number"
                                            onChange={(e) => setAdults(e.target.value)}
                                        />
                                    </ListItemButton>
                                </ListItem>

                                {/* children */}
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ChildCareOutlinedIcon />
                                        </ListItemIcon>
                                        <TextField
                                            id="standard-basic"
                                            placeholder='Childrens'
                                            variant="standard"
                                            size='small'
                                            type="number"
                                            onChange={(e) => setChildren(e.target.value)}

                                        />
                                    </ListItemButton>
                                </ListItem>

                                {/* Rooms  */}
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MeetingRoom />
                                        </ListItemIcon>
                                        <TextField
                                            id="standard-basic"
                                            placeholder='Rooms'
                                            variant="standard"
                                            size='small'
                                            type="number"
                                            onChange={(e) => setRooms(e.target.value)}
                                        />
                                    </ListItemButton>
                                </ListItem>



                                {/* order by  */}
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <SortIcon />
                                        </ListItemIcon>
                                        <Form.Select
                                            aria-label="Default select example"
                                            onChange={(e) => setOrderBy(e.target.value)}
                                        >
                                            <option hidden value='popularity' selected>Order By</option>
                                            <option value="popularity">popularity</option>
                                            <option value="class_ascending">class - ascending</option>
                                            <option value="class_descending">class - descending</option>
                                            <option value="review_score">review score</option>
                                            <option value="price">price</option>
                                        </Form.Select>
                                    </ListItemButton>
                                </ListItem>

                                <Button variant="outlined" sx={{ bgcolor: 'white' }} onClick={handleSearch}>Search</Button>


                            </List>
                        </nav>
                        <Divider />
                    </Box>
                </div>


                {results?.map(hotel => (

                    <div className=' col-md-6 col-lg-4 col-12 loved-card'>
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
                )
                )

                }



                <div className='search-results row w-100'>




                </div>



            </div>
        </>
    );
}