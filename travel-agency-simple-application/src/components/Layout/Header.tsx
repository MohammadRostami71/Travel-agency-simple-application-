import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

const Header: React.FC = () => {

    return (
        <>
            <Stack spacing={2} direction="row" className='flex justify-center my-2'>
                <Button variant="text">
                    <NavLink style={({isActive}) => ({
                        color: isActive ? '#10e10d' : '#a2d7bf'
                    })} to='/resorts'>All Resorts</NavLink>
                </Button>
                <Button variant="text">
                    <NavLink style={({isActive}) => ({
                        color: isActive ? '#940707' : '#e1a1a1',
                    })} to='/favorite'>Favorite Resorts</NavLink>
                </Button>
            </Stack>
        </>
    )
};

export default Header;