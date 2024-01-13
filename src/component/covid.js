import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';
import './covid.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Covid = () => {

    const navigates= useNavigate();
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
            setcdata(actdata)

        } catch (err) {
            console.error("Error fetching COVID data:", err.message);
        }
    };
    

    useEffect(() => {
        getCovidData();

    }, []);


    return (
        <div >
            <div >
                <marquee><h1 className="livec">🔴Live Covid19 Data-Tracking</h1></marquee>
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
                            <big>CASES-CONFIREMED</big>
                            {/* <p className="ptage">{data.cases_confirmed}</p> */}
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
                    <table className="styled-table tb11">
                        <thead className="tb12">
                            <tr>
                                <th style={{ textAlign: "center" }}>Country</th>
                                <th style={{ textAlign: "center" }}>Cases Confirmed</th>
                                <th style={{ textAlign: "center" }}>Deaths</th>
                                <th style={{ textAlign: "center" }}>Recovered</th>
                                <th style={{ textAlign: "center" }}>Flag</th>
                                <th style={{ textAlign: "center" }}>Updated</th>
                                <th style={{ textAlign: "center" }}>StateWise-Data</th>
                            </tr>
                        </thead>
                        <tbody   className="tb13">
                            {data.map((country, index) => (
                                <tr key={index}>
                                    <td>{country.country}</td>
                                    <td>{country.cases_confirmed}</td>
                                    <td>{country.cases_death}</td>
                                    <td>{country.cases_recovered}</td>
                                    <td>{country.flag}</td>
                                    <td>{country.updated}</td>
                                    <td>
                                        {country.country==="India"&& (
                                     <button className="btn btn-success"
                                        onClick={() => {
                                          navigates('/state', { state: { country:country.country} });
                                        }}>StateWise</button>)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </center>
        </div>
    );
}
export default Covid;

