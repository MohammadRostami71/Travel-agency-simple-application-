import React, {useState} from "react";

import AllResorts from "../components/Resort/AllResorts";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface ResortsListProps {
    ResortsData: { id: number, title: string, description: string, price: string, imageUrl: string }[]
}

const ResortsList: React.FC<ResortsListProps> = props => {
    const [page, setPage] = useState(1);
    const [paginated, setPaginated] = useState([]);
    const numberOfItemsYouWantPerPage = 20;
    const paginationChangeHandler = (event: any, value: number) => {
        setPage(value);
    };
    return (
        <>
            <AllResorts Resorts={props.ResortsData}/>
            <Stack spacing={2} textAlign={"center"}>
                <Pagination count={10} color="secondary" onChange={paginationChangeHandler} page={page} size="large"/>
            </Stack>
        </>
    );
};

export default ResortsList;