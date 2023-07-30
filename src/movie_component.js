import PropTypes from "prop-types";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function MovieComponent({ useParamId, postImg, title, year, summary, genres }) {

    return <div id="map_parent">

        <div id="img"><img src={postImg} /></div>


        <Link to={`/Detail/${useParamId}`}> <h2 id="title_year">{title}:{year}</h2></Link>

        <p>{summary}</p>


        {genres ? <ul id="genres"> {genres.map((g) => <li key={g}>{g}</li>)}
        </ul> : null}
        <hr />

    </div>



}

MovieComponent.propTypes = {
    postImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired

}


export default MovieComponent;