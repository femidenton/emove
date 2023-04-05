import { useState, useEffect } from 'react';
import { Ride, Rides, Driver, DriverData, Passenger, Passengers} from '../interfaces/apiTypes';
import axios from '../api/axios';


const useFetchData = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [driversResponse, passengersResponse, ridesResponse] = await Promise.all([
          axios.get<DriverData>('/admin/allDrivers'),
          axios.get<Passengers>('/admin/totalPassengers'),
          axios.get<Rides>('/admin/tripHistory'),
        ]);
        setDrivers(driversResponse.data.data);
        setPassengers(passengersResponse.data.passengers);
        setRides(ridesResponse.data.data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { drivers, passengers, rides, loading, error };
};

export default useFetchData;
