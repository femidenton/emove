import styled from "styled-components";

export const StyledLandingContent = styled.div`
  padding: 120px;
  padding-top: 20px;
  margin: 5px;
  margin-left: 0px;
  padding-left: 60px;
  background-color:#FCFCFD;
  width: 100%;
  height: 100%;

  .content-t1-div, .content-p1-div, .content-p2-div, .content-p3-div{
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
  top: 40px;
}

.content-p2-div{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin: 10px 2px;
  padding: 8px, 16px;
  gap: 8px;
  background-color: #F2F4F7;
  width: 154px;
  height: 40px;
}

.content-t1{
  font-weight: 700;
  font-size: 30px;
  line-height: 56px;
  letter-spacing: 0.25px;
}

.content-p1{
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #667085;
}

.content-p2{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.15px;
}

.content-p3{
  margin: 15px;
  margin-left: 1px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.15px;
}

.content-pointer{
  height: 10px;
  width: 10px;
  margin-right: 5px;
}
`