import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Header: React.FC = props => {

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button variant="text">
                    <Link to='/resorts'>All Resorts</Link>
                </Button>
                <Button variant="text">
                    <Link to='/favorite'>Favorite Resorts</Link>
                </Button>
            </Stack>
        </>
    )
};

export default Header;