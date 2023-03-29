import Button from "./button";
import { StyledForm } from "./styles/form.styled";

const Form = () => {
  return (
    <StyledForm>
      <div className="field">
        <label className="label" htmlFor="name">
          Full Name
        </label>
        <div className="inputbox">
          <input type="text" placeholder="Enter your full name" />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="route">
          Route of operation
        </label>
        <div className="inputbox">
          <select className="route">
            <option>select</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
            <option>Oshodi - Ikeja</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="phone">
          Phone number
        </label>
        <div className="inputbox">
          <input
            className="phone"
            type="text"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="Account">
          Account Nnumber
        </label>
        <div className="inputbox">
          <input
            className="account"
            type="number"
            placeholder="Type your account number"
          />
        </div>
      </div>
      <div className="ID field">
        <label htmlFor="files">Upload valid ID</label>
        <div className="field1">
          <div className="photobox">
            <label htmlFor="files">Upload file</label>
            <input id="files" style={{ visibility: "hidden" }} type="file" />
          </div>
        </div>
      </div>
      <div className="pho field">
        <label htmlFor="files">Upload photo</label>
        <div className="field1">
          <div className="photobox">
            <label htmlFor="files" className="btn">
              Upload photo
            </label>
            <input id="files" style={{ visibility: "hidden" }} />
          </div>
        </div>
      </div>
      <Button formText="Sign up driver" text={""} />
    </StyledForm>
  );
};

export default Form;
