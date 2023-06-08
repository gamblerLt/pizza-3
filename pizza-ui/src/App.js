import React from 'react';
import {Experimental_CssVarsProvider} from '@mui/material';
import Footer from './components/footer/Footer';
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';



const App = () => {
    return (
        <Provider store={store}>
            <Experimental_CssVarsProvider>
                <BrowserRouter>
                    <Header />
                    <Content />
                    <Footer />
                </BrowserRouter>
            </Experimental_CssVarsProvider>
        </Provider>
    );
};

export default App;
/*const App = () => {
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
export default App;*/
