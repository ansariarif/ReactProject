import './Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CallIcon from '@mui/icons-material/Call';

import { Typography } from '@material-ui/core';

function Footer(){
    return(
       <footer className="Footer">
            <Typography variant="h3" align="center" color="primary">NeoSoft Student</Typography>
           {/* <h2 style={{'text-transform':'uppercase','margin-left':'40%','color':'gray'}}>NeoSoft Student</h2> */}
           <span style={{'color':'gray','margin-left':'40%'}}>  Building Cohesive Technology Solutions across 
           </span>
              <br></br>
           <span style={{'color':'gray','margin-left':'30%'}}>
                Web, Mobile, Cloud, loT and Blockchain -
                for the World’s Leading Enterprises, SMEs & Startups
           </span>
            <div className="Icons">
            <div className="Icons1">
            <p>@<AttachEmailIcon></AttachEmailIcon>Conact Email</p>
                <p>@<CallIcon></CallIcon>91-233435667</p>
            </div>
            <div className="Icons2">
            <p>@<InstagramIcon></InstagramIcon> Follow us </p>
                <p>@<FacebookIcon></FacebookIcon>follow us</p>
            </div>
                
                
            </div>
           
          
       </footer>
    );
}

export default Footer;