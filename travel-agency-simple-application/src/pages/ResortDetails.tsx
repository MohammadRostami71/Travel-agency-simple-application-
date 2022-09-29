import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {useParams} from "react-router-dom";
import stockData from '../data/data.json';
import {resortActions} from "../store/resortSlice";
import {useDispatch} from "react-redux";

const ResortDetails: React.FC = () => {
    const params = useParams();
    const {id} = params;
    const detail: any = stockData.find(item => item.id === Number(id));
    const dispatch = useDispatch();
    const addToFav = () => {
        const {id, title, imageUrl, description, price} = detail;
        dispatch(resortActions.addItemToFav({id, title, imageUrl, description, price}))
    };
    const removeFromFav = () => {
        dispatch(resortActions.removeItemFromFav(detail.id));
    };

    return (
        <>
            <div className="flex flex-row my-0.5">
                <div className="basis-1/1">
                    <img className='w-screen' src={detail.imageUrl} alt={detail.title}/>
                </div>
            </div>
            <div className="flex flex-row my-2">
                <div className="basis-1/1">{detail.title}</div>
            </div>
            <div className="flex flex-row my-2">
                <div className="basis-1/1">{detail.description}</div>
            </div>
            <div className="flex flex-row my-2">
                <div className="basis-1/2">Price : {detail.price}</div>
                <div className="basis-1/2 my-3">
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" onClick={removeFromFav} startIcon={<DeleteIcon/>}>
                            Delete From Favorite
                        </Button>
                        <Button variant="contained" onClick={addToFav} endIcon={<SendIcon/>}>
                            Add To Favorite
                        </Button>
                    </Stack>
                </div>
            </div>

        </>
    )
};

export default ResortDetails;