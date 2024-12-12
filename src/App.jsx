import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView.jsx";
import LoginView from "../src/views/LoginView.jsx";
import RegisterView from "../src/views/RegisterView.jsx";
import PlanView from "../src/views/PlanView.jsx";
import FakeSocialMediaView from "../src/views/FakeSocialMediaView.jsx";
import MovieView from "../src/views/MovieView.jsx";
import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>} />
                <Route path="/login" element={<LoginView/>} />
                <Route path="/register" element={<RegisterView/>} />
                <Route path="/plan" element={<PlanView/>} />
                <Route path="/socialmedia" element={<FakeSocialMediaView/>} />
                <Route path="/movie" element={<MovieView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
