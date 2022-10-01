import {FC} from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch} from "react-redux";
import {resortActions} from '../../store/resortSlice';
import {Link} from "react-router-dom";

interface ResortProps {
    Resort: { id: number, title: string, description: string, price: string, imageUrl: string }
}

const Resort: FC<ResortProps> = props => {
    const {id, title, imageUrl, description, price} = props.Resort;
    const dispatch = useDispatch();
    const addToFav = () => {
        dispatch(resortActions.addItemToFav({id, title, imageUrl, description, price}))
    }
    return (
        <>
            <Card sx={{maxWidth: 400}} className='my-3.5'>
                <CardMedia
                    component="img"
                    alt={title}
                    height="150"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <Link to={`/resorts/${id}`}>
                            {title}
                        </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={addToFav}>
                        <ShoppingCartIcon fontSize="large"/>
                    </Button>
                    <Button size="small">Price : {price}</Button>
                    <Button color={"secondary"} size="small">Read More</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default Resort;