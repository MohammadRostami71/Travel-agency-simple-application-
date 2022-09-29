import React, {useEffect, useState} from "react";
import stockData from '../data/data.json';
import AllResorts from "../components/Resort/AllResorts";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const ResortsList: React.FC = () => {
    const [resorts, setResorts] = useState(stockData);
    // useEffect(() => {
    //     let url = '/src/data/data.json'
    //     setResorts(stockData)
    // }, [])
    const [sort, setSort] = useState(0);
    const [page, setPage] = useState(1);
    const [paginated, setPaginated] = useState([]);
    const [numberOfItemsYouWantPerPage] = useState(5);
    const currentPageNumber = (page * numberOfItemsYouWantPerPage) - numberOfItemsYouWantPerPage;
    const paginatedResorts = resorts.splice(currentPageNumber, numberOfItemsYouWantPerPage)
    console.log(paginatedResorts)
    const handlePrev = () => {
        if (page === 1) return
        setPage(page - 1)
    }
    const handleNext = () => {
        setPage(page + 1)
    }
    const handleChange = (event: any) => {
        setSort(event.target.value);
        if (sort === 1 || sort === 2) {

        }
    };
    return (
        <>
            <div className="flex flex-row mt-5">
                <div className="basis-1/2 border-red-300">
                    <input className=' p-4' type='text' placeholder='Search ...'/>
                </div>
                <div className="basis-1/2">
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                label="Age"
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
            <AllResorts Resorts={paginatedResorts}/>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </>
    );
};

export default ResortsList;