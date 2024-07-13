import UserIconMenu from '../../components/UserIcon';
import style from './home.module.css'

const Home = () =>  {
      return (
        <div className="App">
          {true && <UserIconMenu  />}
        </div>
      );
}


export default Home