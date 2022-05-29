import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; 
import Report from '../component/Report';
import Inventary from '../component/Inventary';
import Form from '../component/Form';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact component={ Form } path="/" />
                <Route element={< Report />} path="/relatorio" />
                <Route component={ Inventary } path="/estoque" />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;