import { Routes, Route } from 'react-router-dom';
import Hero from "../src/landingcomponents/Hero";
import Register from "./views/Register";
// import Webapp from './views/Webapp';


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/welcome" element={<Register/>}/>
                {/* <Route path="/app" element={<Webapp />} /> */}
            </Routes>
        </>
    )
}

export default App
