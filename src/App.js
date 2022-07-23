import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeScreen from './screens/Chat/HomeScreen';
import UserProfileScreen from "./screens/Settings/UserProfileScreen";
import LoginScreen from './screens/LoginScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import RegisterScreen from "./screens/RegisterScreen";
import FriendsScreen from "./screens/Contact/FriendsScreen";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthentified: false
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/home" element={ this.state.isAuthentified === true ? <HomeScreen /> : <Navigate to="/" /> } /> */}
                    <Route path="/chat" element={<HomeScreen />} />
                    <Route path="/chat/:id" element={<HomeScreen />} />
                    <Route path="/profile" element={<UserProfileScreen />} />
                    <Route path="/friends" element={<FriendsScreen />} />
                    <Route path="/register" element={<RegisterScreen />} />
                    <Route path="/logout" element={<LoginScreen />} />
                    <Route path="/" element={<LoginScreen />} />
                    <Route path="*" element={<NotFoundScreen />} />
                </Routes>
            </BrowserRouter>
        )
    };
}