import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NotFoundScreen from './screens/NotFoundScreen';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthentified: false
        }
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={ this.state.isAuthentified === true ? <HomeScreen /> : <Navigate to="/" /> } />
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="*" element={<NotFoundScreen />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    };
}