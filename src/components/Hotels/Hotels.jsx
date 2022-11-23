import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { Bed, ManageSearch, MeetingRoom } from '@mui/icons-material';
import { Form, FormControl } from 'react-bootstrap';
import { Autocomplete, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material';
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
import { Stack } from '@mui/system';


export default function Hotels() {


    const [results, setResults] = React.useState(Object);
    const [search, setSearch] = React.useState('amman');
    const [destId, setDestId] = React.useState('')
    const [cities, setCities] = React.useState([])
    const [range, setRange] = React.useState([null, null]);
    const [orderBy, setOrderBy] = React.useState(String);
    const [adults, setAdults] = React.useState(String);
    const [children, setChildren] = React.useState(String);
    const [rooms, setRooms] = React.useState(String);

    function handleSearch() {

        const options = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
            params: {
                checkout_date: range[1],
                units: 'metric',
                dest_id: destId,
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
                'X-RapidAPI-Key': '1554a29a74msh7a16e3977c11e90p1fca56jsnb16561f34dc1',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setResults(response.data)
            console.log("results are " + response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }



    React.useEffect(() => {
        const cityArr = {
            method: 'GET',
            url: 'https://booking-com.p.rapidapi.com/v1/hotels/locations',
            params: { locale: 'en-gb', name: search },
            headers: {
                'X-RapidAPI-Key': '1554a29a74msh7a16e3977c11e90p1fca56jsnb16561f34dc1',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        };

        axios.request(cityArr).then(function (response) {

            setCities(response.data);
            console.log('Cities is ' + JSON.stringify(cities));
            console.log(cities.map(city => typeof (city).name));


        }).catch(function (error) {
            console.error(error);
        });



    }, [search]);



    console.log("length of results is ");


    return (
        <>
            <Header />
            <Stack flexDirection={'row'}>
                <Box flex={3} sx={{ minWidth: 300, position: 'sticky', height: '87vh' }} className='sidebar'>
                    <nav aria-label="main mailbox folders" >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <Bed />
                                    </ListItemIcon>
                                    <Autocomplete
                                        onChange={(event, value) => {
                                            cities.forEach(e => {
                                                if (e.label === value) {
                                                    setDestId(e.dest_id);
                                                    console.log('dest id is' + destId);
                                                }
                                            });
                                        }}
                                        freeSolo
                                        id="free-solo-2-demo"
                                        disableClearable
                                        options={cities.map(city => city.label)}

                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="standard"
                                                placeholder="Search city"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    type: 'search',
                                                }}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        )}
                                    />

                                </ListItemButton>
                            </ListItem>

                            {/* <button onClick={() => console.log(destId)}>click</button> */}


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
                                                setRange([checkin, checkout]);
                                                console.log(range)
                                                console.log(typeof range[0])

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

                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ManageSearch />
                                    </ListItemIcon>


                                    <Button variant="outlined" sx={{ bgcolor: 'white', width: '100%' }} onClick={handleSearch}>Search</Button>
                                </ListItemButton>
                            </ListItem>


                        </List>
                    </nav>
                    <Divider />
                </Box>


                <Box flex={9} sx={{ height: '87vh', overflow: 'auto' }}>
                    {!('result' in results) && (
                        <div className='empty-search'>
                            <h1>Start searching.. </h1>
                            <img src="https://cdn3.iconfinder.com/data/icons/catcommerce-ginger/120/search-512.png" width='200' alt="" />
                        </div>
                    )}
                    {('result' in results) && (

                        < div className='search-results row w-100 gx-0   '>

                            {

                                results?.result?.map(hotel => {
                                    return (<>


                                        <Card className=' my-5 col-lg-5 offset-lg-1 mx-auto col-12' sx={{ maxWidth: 345 }} key={hotel.hotel_id}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={hotel.max_1440_photo_url}
                                                alt="hotel"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" className='text-truncate mb-1'>
                                                    {hotel.hotel_name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className='text-truncate mb-3'>
                                                    {hotel.address_trans}, {hotel.city_trans}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" className='text-truncate'>
                                                    <p className='loved-desc' > Starts from
                                                        <b className='loved-price'>
                                                            {hotel.price_breakdown.all_inclusive_price} {hotel.price_breakdown.currency}
                                                        </b>
                                                    </p>
                                                </Typography>
                                                <Divider className='my-3' />
                                                <Typography variant="body2" color="text.secondary" className='text-truncate'>
                                                    <div className='review '>
                                                        <span className='rate'>
                                                            {hotel.review_score}
                                                        </span>
                                                        <p> {hotel.review_score_word}</p> -
                                                        <p>  {hotel.review_nr} reviews</p>
                                                    </div>
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>











                                        {/* <div className=' col-md-6 col-lg-4 col-12 loved-card px-3' key={hotel.hotel_id}>
                                        <img
                                            src={`${hotel.max_1440_photo_url}`}
                                            alt="hhh"
                                            className='loved-img'
                                        />

                                        <h6 >{hotel.hotel_name}</h6>

                                        <p className='loved-desc' >
                                            {hotel.address_trans}, {hotel.city_trans}
                                        </p>

                                        <p className='loved-desc' > Starts from
                                            <b className='loved-price'>
                                                {hotel.price_breakdown.all_inclusive_price} {hotel.price_breakdown.currency}
                                            </b>
                                        </p>
                                        <div className='review '>
                                            <span className='rate'>
                                                {hotel.review_score}
                                            </span>
                                            <p> {hotel.review_score_word}</p> -
                                            <p>  {hotel.review_nr} reviews</p>
                                        </div>
                                    </div> */}
                                    </>

                                    )
                                }
                                )

                            }


                        </div>
                    )}
                </Box>

            </Stack>

        </>
    );
}