import React from 'react';
import Discussion from '../components/Discussion';
import SideHeader from '../components/SideHeader';

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <section class="chat">
                {/* Users */}
                <SideHeader />
    
                {/* Discussion */}
                <Discussion />
            </section>
        )
    };
}
