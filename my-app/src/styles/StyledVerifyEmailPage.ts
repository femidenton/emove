import styled from 'styled-components'

export const StyledVerifyEmailPage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');
  display: flex;
  padding-bottom: 150px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e5e5e5;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 400px;
    color: #012a4a;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border-radius: 15px;
    padding-top: 20px;
  }

  .icon {
    margin: 50px 0;
  }

  h2 {
    font-family: 'Inter';
    margin-bottom: 70px;
    font-weight: 900;
    font-size: 24px;
    line-height: 24px;
  }

  p {
    text-align: center;
    margin-bottom: 80px;
  }
`
