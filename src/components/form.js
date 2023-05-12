import { useState, useEffect } from 'react'
import axios from 'axios'
import Info from './info';

export default function Form({ setInfo, setState }) {
    const [city, setCity] = useState('');

    const handleChange = async () => {
        const api = "ff34ee124f06b3ae25975f6845b49e48"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&unit=metric&lang=az`;
        await axios(baseURL).then(res => setInfo(res.data))
        setState(true)

    }
    return (
        <div>
            <h1>Weather Forecast</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleChange() }}>
                <div className="form">
                    <input className="inputText" type="text" placeholder="Enter the city" onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="btnDiv">
                    <button type="submit" className="btn">Show</button>
                </div>
            </form>
        </div>
    )
}