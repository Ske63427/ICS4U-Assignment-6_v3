import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import HomeView from "../src/views/HomeView.jsx";
import LoginView from "../src/views/LoginView.jsx";
import RegisterView from "../src/views/RegisterView.jsx";
import PlanView from "../src/views/PlanView.jsx";
import FakeSocialMediaView from "../src/views/FakeSocialMediaView.jsx";
import DefaultMovieView from "../src/views/DefaultMovieView.jsx";
import MovieView from "../src/views/MovieView.jsx";
import MovieDetailView from "../src/views/MovieDetailView.jsx";
import CartView from "../src/views/CartView.jsx";
import './App.css'

function App() {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/login" element={<LoginView/>} />
                    <Route path="/register" element={<RegisterView/>} />
                    <Route path="/plan" element={<PlanView/>} />
                    <Route path="/socialmedia" element={<FakeSocialMediaView/>} />
                    <Route path="/movies" element={<DefaultMovieView/>}>
                        <Route path="all" element={<MovieView/>}/>
                        <Route path=":id" element={<MovieDetailView/>}/>
                    </Route>
                    <Route path="/cart" element={<CartView/>} />
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default App
