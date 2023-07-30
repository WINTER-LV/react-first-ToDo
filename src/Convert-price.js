import { useState, useEffect } from "react";





function ConvertPrice({ style }) {

    const [value, setValue] = useState("");

    const onChange = (event) => setValue(event.target.value);

    const [disabled, setDisabled] = useState(false);

    const onClick = () => setDisabled((prev) => !prev)


    return <div>
        <div>
            <label htmlFor="dollar">Dollar</label>
            <input
                value={disabled ? value * 29252 : value}
                onChange={onChange}
                style={style}
                id="dollar"
                type="number"
                placeholder="dollar"
                disabled={disabled === true}

            />

        </div>

        <div>
            <label htmlFor="btc">BTC</label>
            <input
                value={disabled ? value : (value / 29252).toFixed(6)}
                onChange={onChange}
                style={style}
                id="btc"
                type="number"
                placeholder="btc"
                disabled={disabled === false}
            />
        </div>


        <button onClick={onClick} type="button">Flip</button>

        <hr />

    </div>

}

export default ConvertPrice;