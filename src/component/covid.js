import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {

    const [data, setdata] = useState([]);
   const world1="";
    const getCovidData = async () => {
        try {
            // const res = await fetch('https://data.covid19india.org/data.json');
            const res = await fetch('https://cors-anywhere.herokuapp.com/https://edata.ndtv.com/cricket/coronavirus/data.json');

            // https://edata.ndtv.com/cricket/coronavirus/data.json
            const actdata = await res.json();
            setdata(actdata.countries[1]);
            // data string me hom jayega 
            //    console.log(actdata.updated_date);
            console.log(actdata.cases_confirmed);
        } catch (err) {
            console.log("Error");
        }

    }

    useEffect(() => {
        getCovidData();

    }, []);


    return (
        <div>

            <div>

                <marquee><h1 className="livec">🔴 Live </h1></marquee>
                <h2>COVID-19 CONONAVIRUS TRACKER</h2>

                <ul className="ul-item">
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>WORLD CASES</big>
                            <p className="ptage">{676912795}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> our </small>
                            <big>CONTERY</big>
                            <p className="ptage"><big>{data.country}</big></p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>CASES-CONFIREMED</big>
                            <p className="ptage">{data.cases_confirmed}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>DEATH</big>
                            <p className="ptage">{data.cases_death}</p>
                        </div>
                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>RECOVERED</big>
                            <p className="ptage">{data.cases_recovered}</p>
                        </div>

                    </li>
                    <li className="li-item">
                        <div>
                            <small> total </small>
                            <big>UPDATED</big>
                            <p className="ptage">{data.updated}</p>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    );
}
export default Covid;

