import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Estudiantes from '../src/pages/estudiantes.jsx'; 

function App() {
    return (
        <BrowserRouter>
            <Estudiantes />
        </BrowserRouter>
    );
}

export default App;
