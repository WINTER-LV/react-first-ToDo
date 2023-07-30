import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function MovieList() {
    return (

        <Router>
            <nav>
                <Link to={"/Home"}>Move To movie List</Link>
            </nav>

            <Routes>
                <Route path='/Home' element={<Home />} />
                <Route path='/Detail/:useParamId' element={<Detail />} />
            </Routes>

        </Router>


    );
}

export default MovieList;





