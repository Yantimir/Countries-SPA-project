import styled from "styled-components";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "../Container/Container"

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
    padding: 2rem 0;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled(Link).attrs({
    to: "/",
})`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    text-decoration: none;
`;

const ModeSwitcher = styled.div`
    color: var(--colors-text);
    font-size: var(--fs-sm);
    //font-weight: var(--fw-bold);
    text-transform: capitalize;
    cursor: pointer;
`;

export const Header = () => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === "light" ? (
                            <IoMoonOutline size="14px" />
                        ) : (
                            <IoMoon size="14px" />
                        )}
                        {" "}
                        <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
}