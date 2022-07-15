import React from 'react';
import Sidebar from '../../components/Sidebar';
import Discussion from './../../components/chat/Discussion';
import SideHeader from './../../components/chat/SideHeader';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <Sidebar>
                <section className={"chat"}>
                    {/* Users */}
                    <SideHeader />
        
                    {/* Discussion */}
                    <Discussion />
                </section>
            </Sidebar>
        )
    };
}
