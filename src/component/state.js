import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const State = () => {
    const location = useLocation();
    const { country } = location.state;
    console.log(country);
    
    const [data, setdata] = useState([]);
    const [cdata, setcdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://edata.ndtv.com/cricket/coronavirus/data.json');
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const actdata = await res.json();
            setdata(actdata.countries);
            setcdata(actdata);
        } catch (err) {
            console.error("Error fetching COVID data:", err.message);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);

    const myFunction = () => {
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
        });
    };

    return (
        <div className="App">
            <div className="text-right p-2">
                <button onClick={myFunction} id='darkModeToggle' className='btns'><span>~ Dark Mode</span></button>
            </div>
            <div>
                <marquee><h1 className="livec">🔴 Live </h1></marquee>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <ul className="ul-item">
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>WORLD CASES</big>
                            <p className="ptage">{cdata.updated_date}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>CASES-CONFIRMED</big>
                            <p className="ptage">{cdata.cases_confirmed}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>DEATH</big>
                            <p className="ptage">{cdata.cases_death}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>RECOVERED</big>
                            <p className="ptage">{cdata.cases_recovered}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <center>
                <div className="tbshow">
                    <div className="table-responsive ">
                            <h2>{country}</h2>
                        <table className="styled-table tb11">
                            <thead className="tb12">
                                <tr>
                                    <th style={{ textAlign: "center" }}>State</th>
                                    <th style={{ textAlign: "center" }}>Cases_Confirmed</th>
                                    <th style={{ textAlign: "center" }}>Cases_Death</th>
                                    <th style={{ textAlign: "center" }}>Cases_Recovered</th>
                                    <th style={{ textAlign: "center" }}>Cases_Confirmed_day</th>
                                    <th style={{ textAlign: "center" }}>Cases_Death_day</th>
                                    <th style={{ textAlign: "center" }}>Cases_Recovered_yday</th>
                                    <th style={{ textAlign: "center" }}>Flag</th>
                                    <th style={{ textAlign: "center" }}>Updated</th>
                                </tr>
                            </thead>
                            <tbody className="tb13">
                                {data.map((country) => (
                                    <React.Fragment key={country.id}>
                                        {country.states && country.states.map((state, index) => (
                                            <tr key={index}>
                                                <td>{state.state}</td>
                                                <td>{state.cases_confirmed}</td>
                                                <td>{state.cases_death}</td>
                                                <td>{state.cases_recovered}</td>
                                                <td>{state.cases_confirmed_yday}</td>
                                                <td>{state.cases_death_yday}</td>
                                                <td>{state.cases_recovered_yday}</td>
                                                <td>{state.flag}</td>
                                                <td>{state.updated}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default State;
