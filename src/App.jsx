import Hero from "../src/landingcomponents/Hero";
import Signup from "./landingcomponents/Signup";
import Signin from "./landingcomponents/Login";
import Register from "./views/Register";
import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker registered:', registration);
                    })
                    .catch(error => {
                        console.log('Service Worker registration failed:', error);
                    });
            });
        }
    })

    return (
        <>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/welcome" element={<Register />} />
            </Routes>
            {/* <Signin /> */}
        </>
    )
}

export default App
