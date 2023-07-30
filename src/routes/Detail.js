import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";


function Detail() {

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const { useParamId } = useParams()

    const getParam = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${useParamId}`);
        const json = await response.json()
        setMovies(json);
        console.log(json)
        setLoading(false)



    }

    useEffect(() => {
        getParam()

    }, [])
    return <div>
        {loading ? <h3>Loading......</h3> :

            <div>{movies.data.movie.id}</div>

        }


    </div>
}

export default Detail;