import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from "react-router-dom";

import './Nav.css';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="Nav">
        <Toolbar>
          <NavLink to="/students/showall"><HomeIcon></HomeIcon></NavLink> 
         
          <NavLink to="/students/showall">Show Students</NavLink>
          
         <NavLink to="/students/add">Add  Student</NavLink>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}