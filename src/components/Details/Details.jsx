import styled from "styled-components";

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

`;

const DetailsGroup = styled.div`

`;

const DetailsBody = styled.ul`

`;

const DetailsItem = styled.li`

`;

const Meta = styled.div`

`;

const TagGroup = styled.div`

`;

const Tag = styled.span`

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
        // push
    } = props;

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
                        {borders.map(border => <Tag key={border}>{border}</Tag>)}
                    </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    );
}