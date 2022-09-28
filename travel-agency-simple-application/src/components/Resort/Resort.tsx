import {FC} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ResortProps {
    Resort: { id: number, title: string, description: string, price: string, imageUrl: string }
}

const Resort: FC<ResortProps> = props => {
    return (
        <>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    component="img"
                    alt={props.Resort.title}
                    height="150"
                    image={props.Resort.imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.Resort.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.Resort.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <ShoppingCartIcon fontSize="large"/>
                    </Button>
                    <Button size="small">Price : {props.Resort.price}</Button>
                    <Button color={"secondary"} size="small">Read More</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default Resort;