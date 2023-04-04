import { useState, useEffect } from 'react';
import axios from 'axios';

type Driver = {
  accountNo: number;
  driverId: string;
  fullName: string;
  operationRoute: string;
  phone: number;
  photo: string;
  _id: string;
};

type Passenger = {
  DOB: string;
  createdAt: string;
  email: string;
  gender: string;
  name: string;
  password: string;
  phone: number;
  updatedAt: string;
  userType: string;
  verified: boolean;
  walletBalance: number;
  _v: 0;
  _id: string;
};

type Ride = {
  completed: boolean;
  createdAt: string;
  destination: string;
  passenger: string;
  pickup: string;
  price: number;
  updatedAt: string;
  _v: number;
  _id: string;
};

interface Drivers {
  status: string;
  message: string;
  data: Driver[];
}

interface Rides {
  data: Ride[];
}

interface Passengers {
  message: string;
  passengerCount: number;
  passengers: Passenger[];
  status: string;
}

interface FetchDataResult {
  drivers: Driver[];
  passengers: Passenger[];
  rides: Ride[];
  loading: boolean;
  error: string | null;
}

const useFetchData = (): FetchDataResult => {
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
          axios.get<Drivers>('http://localhost:8081/api/v1/admin/allDrivers'),
          axios.get<Passengers>('http://localhost:8081/api/v1/admin/totalPassengers'),
          axios.get<Rides>('http://localhost:8081/api/v1/admin/tripHistory'),
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
