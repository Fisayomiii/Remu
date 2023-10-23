import Hero from "../src/landingcomponents/Hero";
import Signup from "./landingcomponents/Signup";
import Signin from "./landingcomponents/Login";
import Register from "./views/Register";
import { Routes, Route } from 'react-router-dom';


function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/welcome" element={<Register/>}/>
            </Routes>
            {/* <Signin /> */}
        </>
    )
}

export default App
