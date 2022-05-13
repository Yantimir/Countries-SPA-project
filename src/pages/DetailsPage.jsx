import { useParams } from "react-router-dom";

export const DetailsPage = () => {

    const country = useParams();

    return (
        <div>
            Details {country.name}
        </div>
    );
}