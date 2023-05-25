import React from 'react';
import { Typography, Container } from '@mui/material';
import Footer from './components/footer/Footer';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>

            <Header/>
            <Content/>
            <Footer/>
        </BrowserRouter>
    );
}
export default App;
