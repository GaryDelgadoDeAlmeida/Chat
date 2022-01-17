import Discussion from '../components/Discussion';
import SideHeader from '../components/SideHeader';
import '../styles/css/home.css';

export default function HomeScreen() {
    return (
        <section class="chat">
            {/* Users */}
            <SideHeader />

            {/* Discussion */}
            <Discussion />
        </section>
    );
}