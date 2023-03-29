import { Actions } from "./actions";
import { StyledDriver } from "./styles/driver.styled";
import man2 from "../dashboard/images/man.png"
import Profile from "./profile";
import EditAndDelete from "./editAndDeleteModal";
import { ModalContext } from "../../context/dashboardContext";
import { useContext } from "react";

const Driver = () => {
  const { modals, setModals }:any = useContext(ModalContext);
  const { editAndDeleteModal, profileModal } = modals

  const handleShow = () => {
    setModals({...modals, profileModal: true})
  }
  return (
    <StyledDriver>
      {profileModal && <Profile />}
      {editAndDeleteModal && <EditAndDelete />}
      <div className="top">
        <h1>All Drivers</h1>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Route of Operation</th>
              <th>Phone Number</th>
              <th>Account Number</th>
              <th>Valid ID</th>
              <th>Photo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr  className="tr">
              <td>Ifeoluba Obi</td>
              <td>Oshodi - Mile2</td>
              <td>0817747837373</td>
              <td>00074552728782</td>
              <td>NIN Slip</td>
              <td onClick={handleShow} className="flex">
                <img src={man2} alt="..." />
              </td>
              <td className="driver">
                <Actions />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </StyledDriver>
  );
};

export default Driver;
