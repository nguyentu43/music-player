import ReactDOM from 'react-dom/client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import theme from './theme';
import { AppProvider } from './context';
import { initAxios } from './api';

const {ToastContainer, toast} = createStandaloneToast();
initAxios(toast);

const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(
    <AppProvider>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App/>
                <ToastContainer/>
            </ChakraProvider>
            </BrowserRouter>
    </AppProvider>
);