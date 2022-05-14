import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { HomePage } from "./pages/HomePage";
import { DetailsPage } from "./pages/DetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {

    const [countries, setCountries] = useState([]);

    return (
        <>
            <Header />
            <Main>
                <Switch>
                    <Route exact path="/">
                        <HomePage
                            countries={countries}
                            setCountries={setCountries}
                        />
                    </Route>
                    <Route path="/country/:name" component={DetailsPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Main>
        </>
    );
}

export default App;
