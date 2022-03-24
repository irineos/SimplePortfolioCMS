import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';
import myLogo from '../../images/myLogo.svg';

const NavBar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        navigate('/auth');
    
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div style={{display: 'flex'}}>
                <img className={classes.image} src={myLogo} alt="myLogo" height="80" />
                { user?.result ? (
                    <ul className={classes.appBarLinks}>
                        <NavLink style={({ isActive }) => (isActive ? {color: '#f50057'} : {color: 'black'} )} className={classes.appBarLinks} to="/" >Home</NavLink>
                        <NavLink style={({ isActive }) => (isActive ? {color: '#f50057'} : {color: 'black'})} className={classes.appBarLinks} to="/experience">Experience</NavLink>
                        <NavLink style={({ isActive }) => (isActive ? {color: '#f50057'} : {color: 'black'})} className={classes.appBarLinks} to="/education">Education</NavLink>
                        <NavLink style={({ isActive }) => (isActive ? {color: '#f50057'} : {color: 'black'})} className={classes.appBarLinks} to="/skills">Skills</NavLink>
                        <NavLink style={({ isActive }) => (isActive ? {color: '#f50057'} : {color: 'black'})} className={classes.appBarLinks} to="/projects">Projects</NavLink>
                    </ul>
                ) : ( 
                    <Typography style={{display: 'flex', alignItems: 'center' }} component="h1" variant="h5">Portfolio CMS</Typography>
                )}
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : ( <></>
                    // <Button component={NavLink} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>        
        </AppBar>
    )
}

export default NavBar