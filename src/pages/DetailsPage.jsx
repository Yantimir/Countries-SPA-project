import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button/Button";
import { Details } from "../components/Details/Details";

export const DetailsPage = () => {

    const { name } = useParams();
    const { push, goBack } = useHistory();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(
            ({ data }) => setCountry(data[0])
        );
    }, [name]);

    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack /> Back
            </Button>
            {country && (
                <Details push={push} {...country} />
            )}
        </div>
    );
}