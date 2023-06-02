import React from 'react';
import {Experimental_CssVarsProvider} from '@mui/material';
import Footer from './components/footer/Footer';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
//for cart:
//import {createContext, useState} from "react";



const App = () => {
    return (
        <Experimental_CssVarsProvider>
        <BrowserRouter>

            <Header/>
            <Content/>
            <Footer/>
        </BrowserRouter>
        </Experimental_CssVarsProvider>
    );
}
export default App;
