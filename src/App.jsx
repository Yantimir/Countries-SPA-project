import { Controls } from "./components/Controls/Controls";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";


function App() {
    return (
        <>
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    );
}

export default App;
