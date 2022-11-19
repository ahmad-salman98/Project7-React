import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import {
    TextField,
} from '@mui/material';



export default function PaperContentComponent() {

    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
        >
            <DateRangePicker
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                    // console.log(newValue.D + '-' + newValue.M + 1 + '-' + newValue.Y);

                    let checkin = (newValue[0].$y + '-' + (newValue[0].$M + 1) + '-' + newValue[0].$D);


                    let checkout = (newValue[1].$y + '-' + (newValue[1].$M + 1) + '-' + newValue[1].$D);
                    console.log(checkin, checkout);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <TextField {...startProps} />
                        {/* <Box sx={{ mx: 2 }}> to </Box> */}
                        <TextField {...endProps} />
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>
    );
}
