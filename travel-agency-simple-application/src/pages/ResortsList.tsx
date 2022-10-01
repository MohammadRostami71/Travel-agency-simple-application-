import React, {useEffect, useRef, useState} from "react";
import stockData from '../data/data.json';
import AllResorts from "../components/Resort/AllResorts";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const _ = require("lodash");

const ResortsList: React.FC = () => {
    const [resorts, setResorts] = useState<{ id: number; title: string; description: string; price: string; imageUrl: string; }[]>([]);
    // useEffect(() => {
    //     let url = '/src/data/data.json';
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setResorts(data))
    // }, [])
    useEffect(() => {
        setResorts(stockData);
    }, []);
    const [sort, setSort] = useState<number>(1);
    const [page, setPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>('');
    const [numberOfItemsYouWantPerPage] = useState<number>(20);
    const paginatedResorts = resorts.slice(((page - 1) * (numberOfItemsYouWantPerPage)), ((page) * (numberOfItemsYouWantPerPage)));
    const handleChange = (event: any) => {
        setSort(event.target.value);
    };
    const pageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    // const enteredText = searchValueRef.current ? searchValueRef.current!.value : '';
    const filterTextHandler = (event: any) => {
        setSearchText(event.target.value)
    }
    useEffect(() => {
        setSearchText(searchText);
    }, [searchText]);
    const filteredItems = resorts.filter(
        (item: { title: string, price: string }) =>
            item.title.toLocaleLowerCase().includes(searchText) ||
            item.price.toLocaleLowerCase().includes(searchText)
    );

    let itemsToDisplay = searchText ? filteredItems : paginatedResorts;
    itemsToDisplay = sort === 2 ? _.orderBy(itemsToDisplay, ['title'], ['asc']) :
        (sort === 3) ? _.orderBy(itemsToDisplay, ['price'], ['desc']) :
            (sort === 4) ? _.orderBy(itemsToDisplay, ['price'], ['asc']) : _.orderBy(itemsToDisplay, ['title'], ['desc']);
    return (
        <>
            <div className="flex flex-row justify-around my-5">
                <div className="basis-1/2 ">
                    <input className='outline outline-cyan-100 p-2' value={searchText} onChange={filterTextHandler}
                           type='text' placeholder='Search ...'/>
                </div>
                <div className="basis-1/4">
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Sort"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>Descending Title</MenuItem>
                                <MenuItem value={2}>Ascending Title</MenuItem>
                                <MenuItem value={3}>Descending Price</MenuItem>
                                <MenuItem value={4}>Ascending Price</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <AllResorts Resorts={itemsToDisplay}/>
            <Pagination count={3} variant="outlined" shape="rounded" className='flex justify-center my-6'
                        onChange={pageChange}/>
        </>
    );
};

export default ResortsList;