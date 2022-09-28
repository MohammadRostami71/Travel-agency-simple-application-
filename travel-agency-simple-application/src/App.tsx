import * as React from 'react';
import './App.css';
import stockData from './data.json'
import ResortsList from "./pages/ResortsList";

function App() {
    return (
        <div className="App">
            <ResortsList ResortsData={stockData}/>
        </div>
    );
}

export default App;
