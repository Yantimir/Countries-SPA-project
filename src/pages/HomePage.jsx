
import { useNavigate } from "react-router-dom";

import { List } from "../components/List/List";
import { Card } from "../components/Card/Card";
import { Controls } from "../components/Controls/Controls";


export const HomePage = ({ countries, setCountries }) => {

    const navigate = useNavigate();



    return (

        <>
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

                    return (
                        <Card
                            key={country.name}
                            onClick={() => navigate(`/country/${country.name}`)}
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
}