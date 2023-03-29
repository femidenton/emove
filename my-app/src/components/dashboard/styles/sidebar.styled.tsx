import styled from "styled-components";



export const StyledSidebar = styled.nav`
    
  width: 300px;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  h5{
    opacity: 0.5;
  }

  a{
    color: #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
      padding: 10px 20px;
  border-radius: 8px;
  align-items: center;
  display: flex;
  align-items: center;
  }

  .active{
    color: #fff;
    background-color: #F79009;
  }

  .active .sideIcon{
    color: #fff;
  }

  .deActive .sideIcon{
    color: #F79009;
  }

  

ul{
  list-style: none;
}


ul li{
  margin-top: 40px;
  align-items: center;
  display: flex;
  align-items: center;
}


ul li span{
 margin-left: 10px;
}







`