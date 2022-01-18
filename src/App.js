import React from "react";
import {
    BrowserRouter, 
    Routes, 
    Route, 
    // Navigate 
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import RegisterScreen from "./screens/RegisterScreen";
import UserProfileScreen from "./screens/UserProfileScreen";

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
                        {/* <Route path="/home" element={ this.state.isAuthentified === true ? <HomeScreen /> : <Navigate to="/" /> } /> */}
                        <Route path="/home" element={<HomeScreen />} />
                        <Route path="/home/:id" element={<HomeScreen />} />
                        <Route path="/profile" element={<UserProfileScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/logout" element="" />
                        <Route path="/" element={<LoginScreen />} />
                        <Route path="*" element={<NotFoundScreen />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    };
}