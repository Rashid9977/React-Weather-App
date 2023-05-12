import { WiSunset } from 'react-icons/wi'

function Info({ info, state }) {
    return (
        <div>
            {
                state ? <div className='info'>
                    <p id='city'>{info.name}, {info.sys.country}</p>
                    <div className='commonValue'>
                        <p id='warmless'>{info.main.temp}°</p><WiSunset className='fa-c' />
                    </div>
                    <p id='weatherForecast'>{info.weather[0].description}</p>
                    <div className='feel'>
                        <p id='feeling'>{info.main.feels_like}</p><WiSunset className='fa-c' />
                    </div>

                </div> : null

            }
        </div>
    )
}
export default Info 