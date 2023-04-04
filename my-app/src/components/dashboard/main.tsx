import Header from './header';
import Home from './screens/home';
import Drivers from './screens/drivers';
import Pricing from './screens/pricing';
import Driver from './driver';
import Sidebar from './sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledMain } from './styles/main.styled';
import { ModalContext } from '../../context/dashboardContext';
import { useState } from 'react';


function Dashboard() {
    const [modals, setModals] = useState({
         editAndDeleteModal: false,
         editPriceModal: false,
         profileModal: false,
    })

  return (
    <ModalContext.Provider value={{modals, setModals}}>
      <BrowserRouter>
        <StyledMain>
          <Header />
          <section className='main-section'>
            <Sidebar />
            <div className="pagination">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/driver" element={<Driver />} />
              </Routes>
            </div>
          </section>
        </StyledMain>
      </BrowserRouter>
    </ModalContext.Provider>
  )
}

export default Dashboard
