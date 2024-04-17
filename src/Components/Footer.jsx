import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Outlinedcard from './Outlinecard';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';




export default function Footer(){

    
    const Discover=["Investors","About us","Takeaway","More","Newsroom","Engineering Blog","Design Blog","Gift cards","Deliveroo Students","Careers","Restaurant Signup", "Become a rider"]
    const Legal=["Terms and Conditions", "Privacy", "Cookies", "Modern Slavery Statement", "Tax Strategy", "Section 172 Statement", "Public Authority Requests"];
    const Help=["Contact","FAQs","Cuisines","Brands"]

    return(
        <Stack direction="column" sx={{
            backgroundColor:"#2e3333",
        }}>

            <Stack direction="row">
                <Outlinedcard Cardarray={Discover}/>
                <Outlinedcard Cardarray={Legal}/>
                <Outlinedcard Cardarray={Help}/>
                <Outlinedcard/>
            </Stack>


            <Stack direction="row" sx={{
                justifyContent:"space-between",
            }}>

                <Stack direction="row">
                    <FacebookRoundedIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </Stack>
            
                <Typography sx={{}}> © 2024 Deliveroo</Typography>
            </Stack>

            

    
        </Stack>
    );
}


