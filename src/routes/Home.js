import { useState, useEffect } from "react";
import MovieComponent from "../movie_component";

function Home() {


    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async () => {

        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');

        const json = await response.json()
        setMovies(json.data.movies)
        setLoading(false)

    }

    useEffect(() => {
        getMovies()
        console.log(movies)
    }, [])


    return <div>
        <h2>Movie List{loading ? "" : `(${movies.length})`}</h2>
        {loading ? <h3>Loading.....</h3> :

            <div id="map">{movies.map((x) =>

                <MovieComponent
                    key={x.id}
                    useParamId={x.id}
                    postImg={x.medium_cover_image
                    }
                    title={x.title}
                    year={x.year}
                    summary={x.summary}
                    genres={x.genres} />)}



            </div>


        }
    </div>

}

export default Home