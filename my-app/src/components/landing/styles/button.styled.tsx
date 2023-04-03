import styled from "styled-components";

export const StyledButton = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

 .right-nav {
  display: flex;
  justify-content: space-between;
   align-items: center;
  padding-right: 60px;
  position: relative;
   bottom: 75px;
   left: 980px
}



  a{
   text-decoration: none;
   margin: 15px;
   color: black;
  }

  .p-1{
     border-right: 1px #D0D5DD solid ;
  padding: 0 60px;
  width: 48px;
  font-size: 16px;
    font-weight: 400;
      font-family: "Inter", sans-serif;
      line-height: 22px;
      letter-spacing: 0.15px;
      color: #101828;
      margin-top: 10px
  }

  .p-2{
     font-size: 16px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  line-height: 22px;
  letter-spacing: 0.15px;
  align-content: center;
  }

  .Landing-button{
     background-color: #F79009;
  border: none;
  color: white;
  padding: 12px 16px 12px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
  width: 174px;
  height: 45px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.15px;
  }
`