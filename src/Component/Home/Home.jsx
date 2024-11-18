import { Outlet } from 'react-router-dom';
import Homes from '../Homes/Homes';

const Home = () => {
    return (
      <div>
        
        <Outlet/>
        <Homes></Homes>
      </div>
    );
  };
  
  export default Home;
  
  