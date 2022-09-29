import * as React from 'react';
import './App.css';

import ResortsList from "./pages/ResortsList";
import Layout from "./components/Layout/Layout";
import {Routes,Route} from "react-router-dom";
import Bucket from "./pages/Bucket";
import ResortDetails from "./pages/ResortDetails";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<ResortsList/>}/>
                <Route path='/resorts' element={<ResortsList/>}/>
                <Route path='/resorts/:id' element={<ResortDetails/>}/>
                <Route path='/favorite' element={<Bucket/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

        </Layout>
    );
}

export default App;
