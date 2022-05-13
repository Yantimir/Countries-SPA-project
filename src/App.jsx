import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ALL_COUNTRIES } from "./config";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";


function App() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, [countries]);

    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={
                        <HomePage countries={countries} setCountries={setCountries} />
                    } />
                    <Route path="/country/:name" element={
                        <DetailsPage />
                    } />
                    <Route path="*" element={
                        <NotFoundPage />
                    } />
                </Routes>
            </Main>
        </>
    );
}

export default App;
