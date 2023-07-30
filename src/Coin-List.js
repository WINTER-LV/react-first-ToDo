import { useState, useEffect } from "react";







function CoinList() {
    const [loading, setLoading] = useState(true)
    const [coins, setCoins] = useState([])

    const getCoinList = async () => {
        const response = await fetch("https://api.coinpaprika.com/v1/tickers");
        const json = await response.json();

        setCoins(json)
        setLoading(false)

    }

    useEffect(() => {
        getCoinList()
    }, [])


    return <div>
        <h3>Coin List {loading ? "" : `(${coins.length})`}</h3>
        {loading ? <h4>Loading......</h4> : <select>
            {coins.map((x) => <option key={x.id}>{x.name} ({x.symbol}) : {x.quotes.USD.price}USD</option>)}
        </select>}

    </div>

}

export default CoinList;