import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddDiscussionScreen from '../screens/AddDiscussionScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={LoginScreen}/>
                <Route path="/home" component={HomeScreen}/>
                <Route path="/add_discussion" component={AddDiscussionScreen}/>
            </Routes>
        </BrowserRouter>
    );
}