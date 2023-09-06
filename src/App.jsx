import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";
/*
this code sets up the routing for a React application using react-router-dom. It defines two main routes, one for the Home component and one for the SearchResult component, both wrapped within an AppContext provider. The SearchResult route includes dynamic segments for query and startIndex, allowing the SearchResult component to receive these parameters from the URL.
*/

function App() {
    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                     {/* exact prop, you can make sure that a route only matches when the entire URL matches the specified path. */}
                    <Route path = "/" exact element = {<Home/>} />
                    <Route path = "/:query/:startIndex" element = {<SearchResult/>} />
                </Routes>
            </BrowserRouter>
        </AppContext>
    ) ;
}
    export default App ;
