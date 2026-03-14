import { Nav } from 'react-bootstrap';
import Navbar from './navbar';
import Loader from './loader';
import Cards from './card';



function Home() {
return (
    <div>

        <Navbar/>
        <Loader/>
        <Cards/>
    </div>

);
}
export default Home;