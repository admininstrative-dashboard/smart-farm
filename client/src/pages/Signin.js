import React from 'react';
import { Link } from 'react-router-dom';

import {ThemeProvider , useMediaQuery, Box, Grid,Typography} from '@mui/material';

import { GoogleButton } from '../components/GoogleButton';
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png'

export const Signin = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            xs zeroMinWidth
            sx={{
                backgroundImage: `url(${signBack})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '0'
            }}
        >
            <Box
                sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.75)',
                    borderRadius: '40px',
                    height: '60vh',
                    maxHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <ThemeProvider theme={theme}>
                {!isSmallScreen && (
                        <>
                    <Typography variant='h5' sx={{ my: 2 }}>
                        Welcome to{' '}
                        <Typography component='span' variant='h5' sx={{ color: '#38A505', display: 'inline' }}>
                            Smart Farm
                        </Typography>
                    </Typography>
                    <Typography variant='h3' sx={{ display: 'inline', m: 'auto' }}>
                        Sign In
                    </Typography>
                    </>
                    )}
                    <GoogleButton sx={{ m: 'auto' }} />
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black', margin: 'auto' }}>
                            <Typography  sx={{  color: '#38A505', display: 'inline' }}>
                            CREATE ACCOUNT
                            </Typography>
                     
                    </Link>
                </ThemeProvider>
            </Box>
        </Grid>
    );
};


