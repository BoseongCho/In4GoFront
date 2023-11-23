import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Main/>}/>

                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
