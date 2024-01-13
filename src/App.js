import React, { useState } from 'react';
import './App.css';
import TempChart from './TempChart';

function App() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('CA');
    const [stateCode, setStateCode] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');


    const apiKey = '1a67ab44359d61742560aa00d59baf0b';

    const countries = [
        { code: 'CA', name: 'Canada' },
        { code: 'US', name: 'United States' },
        { code: 'AF', name: 'Afghanistan' },
        { code: 'AX', name: 'Åland Islands' },
        { code: 'AL', name: 'Albania' },
        { code: 'DZ', name: 'Algeria' },
        { code: 'AS', name: 'American Samoa' },
        { code: 'AD', name: 'Andorra' },
        { code: 'AO', name: 'Angola' },
        { code: 'AI', name: 'Anguilla' },
        { code: 'AQ', name: 'Antarctica' },
        { code: 'AG', name: 'Antigua and Barbuda' },
        { code: 'AR', name: 'Argentina' },
        { code: 'AM', name: 'Armenia' },
        { code: 'AW', name: 'Aruba' },
        { code: 'AU', name: 'Australia' },
        { code: 'AT', name: 'Austria' },
        { code: 'AZ', name: 'Azerbaijan' },
        { code: 'BS', name: 'Bahamas' },
        { code: 'BH', name: 'Bahrain' },
        { code: 'BD', name: 'Bangladesh' },
        { code: 'BB', name: 'Barbados' },
        { code: 'BY', name: 'Belarus' },
        { code: 'BE', name: 'Belgium' },
        { code: 'BZ', name: 'Belize' },
        { code: 'BJ', name: 'Benin' },
        { code: 'BM', name: 'Bermuda' },
        { code: 'BT', name: 'Bhutan' },
        { code: 'BO', name: 'Bolivia' },
        { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
        { code: 'BA', name: 'Bosnia and Herzegovina' },
        { code: 'BW', name: 'Botswana' },
        { code: 'BV', name: 'Bouvet Island' },
        { code: 'BR', name: 'Brazil' },
        { code: 'IO', name: 'British Indian Ocean Territory' },
        { code: 'BN', name: 'Brunei Darussalam' },
        { code: 'BG', name: 'Bulgaria' },
        { code: 'BF', name: 'Burkina Faso' },
        { code: 'BI', name: 'Burundi' },
        { code: 'KH', name: 'Cambodia' },
        { code: 'CM', name: 'Cameroon' },
        { code: 'CV', name: 'Cape Verde' },
        { code: 'KY', name: 'Cayman Islands' },
        { code: 'CF', name: 'Central African Republic' },
        { code: 'TD', name: 'Chad' },
        { code: 'CL', name: 'Chile' },
        { code: 'CN', name: 'China' },
        { code: 'CX', name: 'Christmas Island' },
        { code: 'CC', name: 'Cocos (Keeling) Islands' },
        { code: 'CO', name: 'Colombia' },
        { code: 'KM', name: 'Comoros' },
        { code: 'CG', name: 'Congo' },
        { code: 'CD', name: 'Congo, Democratic Republic of the' },
        { code: 'CK', name: 'Cook Islands' },
        { code: 'CR', name: 'Costa Rica' },
        { code: 'HR', name: 'Croatia' },
        { code: 'CU', name: 'Cuba' },
        { code: 'CY', name: 'Cyprus' },
        { code: 'CZ', name: 'Czech Republic' },
        { code: 'DK', name: 'Denmark' },
        { code: 'DJ', name: 'Djibouti' },
        { code: 'DM', name: 'Dominica' },
        { code: 'DO', name: 'Dominican Republic' },
        { code: 'EC', name: 'Ecuador' },
        { code: 'EG', name: 'Egypt' },
        { code: 'SV', name: 'El Salvador' },
        { code: 'GQ', name: 'Equatorial Guinea' },
        { code: 'ER', name: 'Eritrea' },
        { code: 'EE', name: 'Estonia' },
        { code: 'ET', name: 'Ethiopia' },
        { code: 'FK', name: 'Falkland Islands (Malvinas)' },
        { code: 'FO', name: 'Faroe Islands' },
        { code: 'FJ', name: 'Fiji' },
        { code: 'FI', name: 'Finland' },
        { code: 'FR', name: 'France' },
        { code: 'GF', name: 'French Guiana' },
        { code: 'PF', name: 'French Polynesia' },
        { code: 'TF', name: 'French Southern Territories' },
        { code: 'GA', name: 'Gabon' },
        { code: 'GM', name: 'Gambia' },
        { code: 'GE', name: 'Georgia' },
        { code: 'DE', name: 'Germany' },
        { code: 'GH', name: 'Ghana' },
        { code: 'GI', name: 'Gibraltar' },
        { code: 'GR', name: 'Greece' },
        { code: 'GL', name: 'Greenland' },
        { code: 'GD', name: 'Grenada' },
        { code: 'GP', name: 'Guadeloupe' },
        { code: 'GU', name: 'Guam' },
        { code: 'GT', name: 'Guatemala' },
        { code: 'GG', name: 'Guernsey' },
        { code: 'GN', name: 'Guinea' },
        { code: 'GW', name: 'Guinea-Bissau' },
        { code: 'GY', name: 'Guyana' },
        { code: 'HT', name: 'Haiti' },
        { code: 'HM', name: 'Heard Island and McDonald Islands' },
        { code: 'VA', name: 'Holy See (Vatican City State)' },
        { code: 'HN', name: 'Honduras' },
        { code: 'HK', name: 'Hong Kong' },
        { code: 'HU', name: 'Hungary' },
        { code: 'IS', name: 'Iceland' },
        { code: 'IN', name: 'India' },
        { code: 'ID', name: 'Indonesia' },
        { code: 'IR', name: 'Iran, Islamic Republic of' },
        { code: 'IQ', name: 'Iraq' },
        { code: 'IE', name: 'Ireland' },
        { code: 'IM', name: 'Isle of Man' },
        { code: 'IL', name: 'Israel' },
        { code: 'IT', name: 'Italy' },
        { code: 'JM', name: 'Jamaica' },
        { code: 'JP', name: 'Japan' },
        { code: 'JE', name: 'Jersey' },
        { code: 'JO', name: 'Jordan' },
        { code: 'KZ', name: 'Kazakhstan' },
        { code: 'KE', name: 'Kenya' },
        { code: 'KI', name: 'Kiribati' },
        { code: 'KP', name: 'Korea, Democratic People\'s Republic of' },
        { code: 'KR', name: 'Korea, Republic of' },
        { code: 'KW', name: 'Kuwait' },
        { code: 'KG', name: 'Kyrgyzstan' },
        { code: 'LA', name: 'Lao People\'s Democratic Republic' },
        { code: 'LV', name: 'Latvia' },
        { code: 'LB', name: 'Lebanon' },
        { code: 'LS', name: 'Lesotho' },
        { code: 'LR', name: 'Liberia' },
        { code: 'LY', name: 'Libya' },
        { code: 'LI', name: 'Liechtenstein' },
        { code: 'LT', name: 'Lithuania' },
        { code: 'LU', name: 'Luxembourg' },
        { code: 'MO', name: 'Macao' },
        { code: 'MK', name: 'Macedonia, the Former Yugoslav Republic of' },
        { code: 'MG', name: 'Madagascar' },
        { code: 'MW', name: 'Malawi' },
        { code: 'MY', name: 'Malaysia' },
        { code: 'MV', name: 'Maldives' },
        { code: 'ML', name: 'Mali' },
        { code: 'MT', name: 'Malta' },
        { code: 'MH', name: 'Marshall Islands' },
        { code: 'MQ', name: 'Martinique' },
        { code: 'MR', name: 'Mauritania' },
        { code: 'MU', name: 'Mauritius' },
        { code: 'YT', name: 'Mayotte' },
        { code: 'MX', name: 'Mexico' },
        { code: 'FM', name: 'Micronesia, Federated States of' },
        { code: 'MD', name: 'Moldova, Republic of' },
        { code: 'MC', name: 'Monaco' },
        { code: 'MN', name: 'Mongolia' },
        { code: 'ME', name: 'Montenegro' },
        { code: 'MS', name: 'Montserrat' },
        { code: 'MA', name: 'Morocco' },
        { code: 'MZ', name: 'Mozambique' },
        { code: 'MM', name: 'Myanmar' },
        { code: 'NA', name: 'Namibia' },
        { code: 'NR', name: 'Nauru' },
        { code: 'NP', name: 'Nepal' },
        { code: 'NL', name: 'Netherlands' },
        { code: 'NC', name: 'New Caledonia' },
        { code: 'NZ', name: 'New Zealand' },
        { code: 'NI', name: 'Nicaragua' },
        { code: 'NE', name: 'Niger' },
        { code: 'NG', name: 'Nigeria' },
        { code: 'NU', name: 'Niue' },
        { code: 'NF', name: 'Norfolk Island' },
        { code: 'MP', name: 'Northern Mariana Islands' },
        { code: 'NO', name: 'Norway' },
        { code: 'OM', name: 'Oman' },
        { code: 'PK', name: 'Pakistan' },
        { code: 'PW', name: 'Palau' },
        { code: 'PS', name: 'Palestine, State of' },
        { code: 'PA', name: 'Panama' },
        { code: 'PG', name: 'Papua New Guinea' },
        { code: 'PY', name: 'Paraguay' },
        { code: 'PE', name: 'Peru' },
        { code: 'PH', name: 'Philippines' },
        { code: 'PN', name: 'Pitcairn' },
        { code: 'PL', name: 'Poland' },
        { code: 'PT', name: 'Portugal' },
        { code: 'PR', name: 'Puerto Rico' },
        { code: 'QA', name: 'Qatar' },
        { code: 'RE', name: 'Réunion' },
        { code: 'RO', name: 'Romania' },
        { code: 'RU', name: 'Russian Federation' },
        { code: 'RW', name: 'Rwanda' },
        { code: 'BL', name: 'Saint Barthélemy' },
        { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
        { code: 'KN', name: 'Saint Kitts and Nevis' },
        { code: 'LC', name: 'Saint Lucia' },
        { code: 'MF', name: 'Saint Martin (French part)' },
        { code: 'PM', name: 'Saint Pierre and Miquelon' },
        { code: 'VC', name: 'Saint Vincent and the Grenadines' },
        { code: 'WS', name: 'Samoa' },
        { code: 'SM', name: 'San Marino' },
        { code: 'ST', name: 'Sao Tome and Principe' },
        { code: 'SA', name: 'Saudi Arabia' },
        { code: 'SN', name: 'Senegal' },
        { code: 'RS', name: 'Serbia' },
        { code: 'SC', name: 'Seychelles' },
        { code: 'SL', name: 'Sierra Leone' },
        { code: 'SG', name: 'Singapore' },
        { code: 'SX', name: 'Sint Maarten (Dutch part)' },
        { code: 'SK', name: 'Slovakia' },
        { code: 'SI', name: 'Slovenia' },
        { code: 'SB', name: 'Solomon Islands' },
        { code: 'SO', name: 'Somalia' },
        { code: 'ZA', name: 'South Africa' },
        { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
        { code: 'SS', name: 'South Sudan' },
        { code: 'ES', name: 'Spain' },
        { code: 'LK', name: 'Sri Lanka' },
        { code: 'SD', name: 'Sudan' },
        { code: 'SR', name: 'Suriname' },
        { code: 'SJ', name: 'Svalbard and Jan Mayen' },
        { code: 'SE', name: 'Sweden' },
        { code: 'CH', name: 'Switzerland' },
        { code: 'SY', name: 'Syrian Arab Republic' },
        { code: 'TW', name: 'Taiwan, Province of China' },
        { code: 'TJ', name: 'Tajikistan' },
        { code: 'TZ', name: 'Tanzania, United Republic of' },
        { code: 'TH', name: 'Thailand' },
        { code: 'TL', name: 'Timor-Leste' },
        { code: 'TG', name: 'Togo' },
        { code: 'TK', name: 'Tokelau' },
        { code: 'TO', name: 'Tonga' },
        { code: 'TT', name: 'Trinidad and Tobago' },
        { code: 'TN', name: 'Tunisia' },
        { code: 'TR', name: 'Turkey' },
        { code: 'TM', name: 'Turkmenistan' },
        { code: 'TC', name: 'Turks and Caicos Islands' },
        { code: 'TV', name: 'Tuvalu' },
        { code: 'UG', name: 'Uganda' },
        { code: 'UA', name: 'Ukraine' },
        { code: 'AE', name: 'United Arab Emirates' },
        { code: 'GB', name: 'United Kingdom' },
        { code: 'UM', name: 'United States Minor Outlying Islands' },
        { code: 'UY', name: 'Uruguay' },
        { code: 'UZ', name: 'Uzbekistan' },
        { code: 'VU', name: 'Vanuatu' },
        { code: 'VE', name: 'Venezuela, Bolivarian Republic of' },
        { code: 'VN', name: 'Viet Nam' },
        { code: 'VG', name: 'Virgin Islands, British' },
        { code: 'VI', name: 'Virgin Islands, U.S.' },
        { code: 'WF', name: 'Wallis and Futuna' },
        { code: 'EH', name: 'Western Sahara' },
        { code: 'YE', name: 'Yemen' },
        { code: 'ZM', name: 'Zambia' },
        { code: 'ZW', name: 'Zimbabwe' },
        // Add more countries as needed
    ];

    const usStates = [
        { code: 'AL', name: 'Alabama' },
        { code: 'AK', name: 'Alaska' },
        { code: 'AZ', name: 'Arizona' },
        { code: 'AR', name: 'Arkansas' },
        { code: 'CA', name: 'California' },
        { code: 'CO', name: 'Colorado' },
        { code: 'CT', name: 'Connecticut' },
        { code: 'DE', name: 'Delaware' },
        { code: 'FL', name: 'Florida' },
        { code: 'GA', name: 'Georgia' },
        { code: 'HI', name: 'Hawaii' },
        { code: 'ID', name: 'Idaho' },
        { code: 'IL', name: 'Illinois' },
        { code: 'IN', name: 'Indiana' },
        { code: 'IA', name: 'Iowa' },
        { code: 'KS', name: 'Kansas' },
        { code: 'KY', name: 'Kentucky' },
        { code: 'LA', name: 'Louisiana' },
        { code: 'ME', name: 'Maine' },
        { code: 'MD', name: 'Maryland' },
        { code: 'MA', name: 'Massachusetts' },
        { code: 'MI', name: 'Michigan' },
        { code: 'MN', name: 'Minnesota' },
        { code: 'MS', name: 'Mississippi' },
        { code: 'MO', name: 'Missouri' },
        { code: 'MT', name: 'Montana' },
        { code: 'NE', name: 'Nebraska' },
        { code: 'NV', name: 'Nevada' },
        { code: 'NH', name: 'New Hampshire' },
        { code: 'NJ', name: 'New Jersey' },
        { code: 'NM', name: 'New Mexico' },
        { code: 'NY', name: 'New York' },
        { code: 'NC', name: 'North Carolina' },
        { code: 'ND', name: 'North Dakota' },
        { code: 'OH', name: 'Ohio' },
        { code: 'OK', name: 'Oklahoma' },
        { code: 'OR', name: 'Oregon' },
        { code: 'PA', name: 'Pennsylvania' },
        { code: 'RI', name: 'Rhode Island' },
        { code: 'SC', name: 'South Carolina' },
        { code: 'SD', name: 'South Dakota' },
        { code: 'TN', name: 'Tennessee' },
        { code: 'TX', name: 'Texas' },
        { code: 'UT', name: 'Utah' },
        { code: 'VT', name: 'Vermont' },
        { code: 'VA', name: 'Virginia' },
        { code: 'WA', name: 'Washington' },
        { code: 'WV', name: 'West Virginia' },
        { code: 'WI', name: 'Wisconsin' },
        { code: 'WY', name: 'Wyoming' },
    ];

    const getWeatherData = async () => {
        try {
            // The GeoSpatial API needs only a city and country unless the country is the United States. In that case the url also needs the state code
            const locationApiUrl = country === 'US'
                ? `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${country}&limit=1&appid=${apiKey}`
                : `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`;
            
            const locationResponse = await fetch(locationApiUrl);
            const locationData = await locationResponse.json();

            // If the GeoSpatial API cannot find the searched place, an error message appears
            if (!locationData || locationData.length === 0) {
                setErrorMessage('Location not found. Please ensure your input is correct and try again.');
                setWeatherData(null); // Reset weatherData
                setLocationData(null); // Reset locationData
                return;
            }

            setLocationData(locationData);

            // Update the Weather API url based off of the found latitude and longitude
            const weatherApiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${locationData && locationData.length > 0 ? locationData[0].lat : ''}&lon=${locationData && locationData.length > 0 ? locationData[0].lon : ''}&appid=${apiKey}`;

            const weatherResponse = await fetch(weatherApiUrl);
            const weatherData = await weatherResponse.json();

            setWeatherData(weatherData);

            console.log(weatherData);
            // Resets the error message if a place is found and the weather is retrieved
            setErrorMessage('');
        } catch (error) {
            console.error('Error fetching data:', error);

            // Check if the error is due to a specific condition (e.g., place not found)
            if (error.message.includes('undefined')) {
                // Handle the specific error condition
                alert('Location not found. Please ensure your input is correct and try again.');
            } else {
                // For other types of errors, provide a generic error message
                alert('An error occurred while fetching location data. Please try again later.');
            }
        }
    };

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);

        // If the selected country is the United States, set an empty state code
        if (selectedCountry === 'US') {
            setStateCode('');
        }
    };

    const handleStateChange = (e) => {
        const selectedStateCode = e.target.value;
        setStateCode(selectedStateCode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherData();
    };

    // The Weather API gets temperature in kelvin, not a unit most people would use when checking the weather
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;

    // Formats the date used in the forecast
    const formatDate = (date) => {
        const options = { month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };//

    const formatHourlyTime = (timestamp, timezone) => {
        const options = { hour: 'numeric', hour12: true, timeZone: timezone };
        return new Intl.DateTimeFormat('en-US', options).format(new Date(timestamp * 1000));
    };

    const capitalizeFirstLetter = (text) => {
        return text.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    function metersPerSecondToKilometersPerHour(metersPerSecond) {
        return metersPerSecond * 3.6;
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter city name:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <label>
                    Select country:
                    <select value={country} onChange={handleCountryChange}>
                        {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </label>

                {country === 'US' && (
                    <label>
                        Select state:
                        <select value={stateCode} onChange={handleStateChange}>
                            {usStates.map((state) => (
                                <option key={state.code} value={state.code}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </label>
                )}          

                <button type="submit">Get Weather</button>
            </form>

            {errorMessage && (
                <div>
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                </div>
            )}

            {weatherData && weatherData.current && (
                <div className="current-weather-container">
                    <h2 className="current-title">Current Weather</h2>
                    <div className="left-column">
                        <p className="current-description">{capitalizeFirstLetter(weatherData.current.weather[0].description)}</p>
                        <img
                            src={`http://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`}
                            alt={weatherData.current.weather[0].description}
                            className="current-icon"
                        />
                        <p className="current-temperature">{kelvinToCelsius(weatherData.current.temp).toFixed(1)} °C</p>
                    </div>
                    <div className="right-column">
                        <p>Feels Like: {kelvinToCelsius(weatherData.current.feels_like).toFixed(1)} °C</p>
                        <p>Humidity: {weatherData.current.humidity ? `${weatherData.current.humidity}%` : 'N/A'}</p>
                        {weatherData.minutely && weatherData.minutely.slice(0, 60).length > 0 && (
                            <p>Precipitation for the next hour: {(weatherData.minutely.slice(0, 60).reduce((total, minute) => total + minute.precipitation, 0)/60).toFixed(1)} mm</p>
                        )}
                        <p>Wind: {metersPerSecondToKilometersPerHour(weatherData.current.wind_speed).toFixed(0)} km/hr</p>
                    </div>
                </div>
            )}

            {weatherData && weatherData.hourly && (
                <div>
                    {/* Display hourly forecast */}
                    <h2>24 Hour Forecast</h2>
                    <div className="hourly-forecast">
                        {weatherData.hourly.slice(1, 25).map((hour, index) => (
                            <div key={index} className="hourly-card">
                                <p className="hourly-time">{formatHourlyTime(hour.dt, weatherData.timezone)}</p>
                                <p className="hourly-temperature">{kelvinToCelsius(hour.temp).toFixed(1)} °C</p>
                                <img
                                    src={`http://openweathermap.org/img/w/${hour.weather[0].icon}.png`}
                                    alt={hour.weather[0].description}
                                />
                                {hour.rain && (
                                    <p className="hourly-precipitation">{hour.rain['1h'].toFixed(1)} mm</p>
                                )}
                                {hour.snow && (
                                    <p className="hourly-precipitation">{hour.snow['1h'].toFixed(1)} mm</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {weatherData && weatherData.current && weatherData.hourly && (
                <div>
                    <TempChart currentTemperature={weatherData.current.temp} forecastedTemperatures={weatherData.hourly.slice(1, 25).map(hour => hour.temp)} forecastedTimes={weatherData.hourly.slice(1,25).map(hour => hour.dt)} timezone={weatherData.timezone}/>
                </div>
            )}

            {weatherData && weatherData.daily && (
                <div>
                    {/* Display forecast data here */}
                    <h2>7-Day Forecast</h2>
                    <div className="forecast-container">
                        {weatherData.daily.slice(1).map((day, index) => (
                            <div key={index}  className="forecast-day">
                                <p className="date">{formatDate(new Date(day.dt * 1000))}</p>
                                <p className="temperature">{kelvinToCelsius(day.temp.day).toFixed(1)} °C</p>
                                <img
                                    src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                                    alt={day.weather[0].description}
                                />
                                {day.rain && (
                                    <p className="hourly-precipitation">{day.rain.toFixed(1)} mm</p>
                                )}
                                {/*There is a check here to ensure there is no rain that day.
                                   If there is rain it doesn't make sense to report the snowfall as well*/}
                                {day.snow && !day.rain &&(
                                    <p className="hourly-precipitation">{day.snow.toFixed(1)} mm</p>
                                )}
                            </div>
                        ))}
                    </div>    
                </div>
            )}

            {locationData && locationData.length > 0 && (
                <div>
                    {/* Display location data here */}
                    <h2>Location Details</h2>
                    <p>Latitude: {locationData[0].lat}</p>
                    <p>Longitude: {locationData[0].lon}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>

        
    );
}

export default App;