import BarChart from '../graph'
import { StyledHome } from '../styles/home.styled'
import { FaCarSide } from 'react-icons/fa'
import useFetch from '../../../hooks/useFetch';

// type Data = {
//   result: any;
//   isLoading: boolean;
//   error: any;
// }
const Home = () => {
  
  //  const allDrivers: Promise<Data> = useFetch('http://localhost:8081/api/v1/admin/allDrivers');
  //  const allPassengers = useFetch("http://localhost:8081/api/v1/admin/totalPassengers");
  //  const allRides = useFetch('http://localhost:8081/api/v1/admin/tripHistory');

  // const drivers = allDrivers.result;
  // const passengers = allPassengers.result;
  // const rides = allRides.result;


  const data: Array<[string, number]> = [
    ['Jan', 15000],
    ['Feb', 18000],
    ['Mar', 20000],
    ['Apr', 15000],
    ['May', 22000],
    ['Jun', 23000],
    ['Jul', 25000],
    ['Aug', 25000],
    ['Sep', 23000],
    ['Oct', 16000],
    ['Nov', 10000],
    ['Dec', 8000],
  ]


  return (
    <StyledHome>
      <div>
        <h1>Welcome Admin</h1>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="left">
            <h3>207</h3>
            <small>ride</small>
          </div>
          <div className="icon">
            <FaCarSide  />
          </div>
        </div>
        <div className="box">
          <div className="left">
            <h3>84</h3>
            <small>passengers</small>
          </div>
          <div className="icon">
            <FaCarSide />
          </div>
        </div>
        <div className="box">
          <div className="left">
            <h3>32</h3>
            <small>drivers</small>
          </div>
          <div className="icon">
            <FaCarSide />
          </div>
        </div>
      </div>
      <BarChart data={data} title="" />
    </StyledHome>
  )
}

export default Home
