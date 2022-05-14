import axios from "axios";
import { useState, useEffect } from 'react'
import styled from "styled-components";
import { filterByCode } from "../../config";


const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media(min-width: 767px){
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
    @media(min-width: 1024px){
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const DetailsImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const DetailsTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const DetailsGroup = styled.div`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    @media(min-width: 1024px){
        flex-direction: row;
        gap: 4rem;
    }
`;

const DetailsBody = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

`;

const DetailsItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b {
        font-weight: var(--fw-bold);
    }

    @media(min-width: 767px){
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;



export const Details = (props) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subRegion,
        topLevelDomain,
        currencies = [],
        languares = [],
        borders = [],
        push
    } = props;

    const [naighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length)
            axios.get(filterByCode(borders))
                .then(({ data }) => setNeighbors(data.map(country => country.name)))
    }, [borders]);

    return (
        <Wrapper>
            <DetailsImage src={flag} alt={name} />
            <div>
                <DetailsTitle>{name}</DetailsTitle>
                <DetailsGroup>
                    <DetailsBody>
                        <DetailsItem>
                            <b>Native Name:</b> {nativeName}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Population:</b> {population}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Region:</b> {region}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Sub Region:</b> {subRegion}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Capital:</b> {capital}
                        </DetailsItem>
                    </DetailsBody>
                    <DetailsBody>
                        <DetailsItem>
                            <b>Top Level Domain</b>{" "}
                            {topLevelDomain.map(domain => (
                                <span key={domain}>{domain}</span>))}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Currency</b>{" "}
                            {currencies.map(current => (
                                <span key={current.code}>{current.name} </span>))}
                        </DetailsItem>
                        <DetailsItem>
                            <b>Languares</b>{" "}
                            {languares.map(lang => (
                                <span key={lang.name}>{lang.name}</span>))}
                        </DetailsItem>
                    </DetailsBody>
                </DetailsGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (<TagGroup>
                        {naighbors.map((border) => (
                            <Tag key={border} onClick={() => push(`/country/${border}`)}>{border}</Tag>
                        ))}
                    </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
}