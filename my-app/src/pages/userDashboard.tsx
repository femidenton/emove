import React from 'react'
import UserDashboardHeader from '../components/userDashboardHeader'
import { Routes, Route } from "react-router-dom";
import ChooseRoutes from '../components/bookRoutes';
import TripDetails from '../components/tripDetails';

export default function UserDashboard() {
  return (
     <>
          <UserDashboardHeader />
          <section>
              <Routes>
                <Route path="/book-route" element={<ChooseRoutes />} />
                <Route path="/trip-details/:id" element={<TripDetails />} />
              </Routes>
          </section>
        </>
  )
}
