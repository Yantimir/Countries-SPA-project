import styled from "styled-components";
import { IoSearch } from "react-icons/io5";


const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radius);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;

    @media(min-width: 767px){
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: "search",
    placeholder: "Search for a country..."
})`
    margin-left: 0.5rem;
    border: none;
    outline: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);

    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        margin-left: .4em;
        cursor: pointer;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    }
`;

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <div>
                <IoSearch />
            </div>
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
    );
}