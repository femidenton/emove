import { FaArrowLeft } from 'react-icons/fa'
import map from '../images/map.png'
import img from '../components/dashboard/images/rec.png'
import Button from './dashboard/button'
import { StyledChooseRoute } from '../styles/chooseRoute.styled'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IRoute } from '../interfaces/apiTypes'
import { fetchRoutes } from '../api/api'

const TripDetails = () => {
    const [route, setRoute] = useState<IRoute>();
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        const fetch = async () => {
            if (id === "default") {
                return;
            }
            const result = await fetchRoutes();
            if (result) {
                const theRoute = result.find((r: any) => r._id === id);
                setRoute(theRoute);
            }
        }
        fetch();
    },[])
  return (
    <StyledChooseRoute>
      <div className="container">
        <div className="backbtn">
          <FaArrowLeft />
          Go back
        </div>
        <section>
          <div className="left">
            <h1>Trip Details</h1>
            <div className='map'>
              <img src={map} alt="..." />
                      </div>
                      <table>
                          <thead>
                              <tr>
                                 <th>Destination</th>
                                 <th>Amount</th>
                                 <th>Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {route && 
                                  <tr>
                                      <td>{route?.destination} - { route?.pickup}</td>
                                      <td>{ route.price }</td>
                                      <td>Mon 7th - 4:00PM</td>
                                  </tr>
                              }
                          </tbody>
                      </table>
            <Button
              bookTrip="Book a Trip"
              formText={''}
              text={''}
                      />
          </div>
          <div className="right">
            <img src={img} alt="..." />
            <h2>Board our vehicles anywhere in Lagos at regular rates</h2>
          </div>
        </section>
      </div>
    </StyledChooseRoute>
  )
}

export default TripDetails
