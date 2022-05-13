import axios from "axios";
import { useState, useEffect } from "react";

import { Controls } from "./components/Controls/Controls";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Card } from "./components/Card/Card";
import { Main } from "./components/Main/Main";
import { ALL_COUNTRIES } from "./config";


function App() {

    const [countries, setCountries] = useState([]);
    console.log(countries);

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));

    }, []);

    return (
        <>
            <Header />
            <Main>
                <Controls />
                <List>
                    {countries.map(country => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: "Population",
                                    description: country.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: country.region
                                },
                                {
                                    title: "Capital",
                                    description: country.capital
                                }
                            ]
                        };

                        return(
                            <Card key={country.name} {...countryInfo}/>
                        );

                    })}
                </List>
            </Main>
        </>
    );
}

export default App;
