import { StyledHeader } from './styles/header.styled'
import logo from '../dashboard/images/logo.png'
import { ModalContext } from '../../context/dashboardContext'
import { useContext } from 'react'


const Header = () => {
  const { modals, setModals }:any = useContext(ModalContext)
  const { editAndDeleteModal, editPriceModal, profileModal } = modals
   
  const handle = () => {
    setModals({...modals, editAndDeleteModal: true})
  }

   const handleClose = () => {
    setModals({...modals, editAndDeleteModal: false, profileModal: false, editPriceModal:false})
  }



  return (
    <StyledHeader>
      {(editAndDeleteModal || editPriceModal || profileModal) && <div onClick={handleClose} className="overlay"></div>}
      <div className="container">
        <div className="logo">
          <img src={logo} alt="..." />
          E-move
        </div>
        <div className="right">
          <h4>Hi, Admin</h4>
          <span></span>
          <button onClick={handle}>Logout</button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
