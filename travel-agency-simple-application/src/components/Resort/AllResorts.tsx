import {FC, useEffect, useState} from "react";
import * as React from 'react';
import {experimentalStyled as styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Resort from './Resort';


interface AllResortsProp {
    Resorts: { id: number, title: string, description: string, price: string, imageUrl: string }[];
}

const AllResorts: FC<AllResortsProp> = props => {
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>
                                {props.Resorts.map((data: any, index: number) => (
                                    <Resort key={index} Resort={data}/>
                                ))}
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
};

export default AllResorts;