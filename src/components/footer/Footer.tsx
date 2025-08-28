import { Box, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer=()=>{
    return<Box>
        <Typography>Contact us</Typography>
        <Link to="#"><WhatsAppIcon/></Link>
        <Link to="#"><InstagramIcon/></Link>
        <Link to="#"><LocalPhoneIcon/></Link>
        <Link to="#"><FacebookIcon/></Link>
    </Box>
}
export default Footer