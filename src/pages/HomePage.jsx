import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import { List } from "../components/List/List";
import { Card } from "../components/Card/Card";
import { Controls } from "../components/Controls/Controls";
import { ALL_COUNTRIES } from "../config";

export const HomePage = ({ countries, setCountries }) => {

    const [filteredCountries, setFilteredCountries] = useState(countries);

    const { push } = useHistory();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region))
        }

        if (search) {
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data);
    }

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => { setCountries(data) })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, [countries])

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map(country => {
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

                    return (
                        <Card
                            key={country.name}
                            onClick={() => push(`/country/${country.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
}