import styled from "styled-components";

export const Styledfooter = styled.div`
 color: rgb(0, 0, 0);
 display: flex;
 flex-direction: column;
 position: absolute;
 align-items: center;
 top: 600px;
 width: 100%;
 height: 200px;
 text-align: center;
 background-color: #F2F4F7;

 .Logo-footer{
  position: relative;
  right: 75px;
  top: 37px;
}

.title-footer{
  font-family: "Inter", sans-serif;
  margin-bottom: 20px;
  margin-top: 2px;
  margin-left: 20px;
  font-size: 32px;
  font-weight: 700;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.col {
  flex: 0.04;
  font-size: 15px;
}

hr{
  border: 0.2px solid #171825;
  width: 1240px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.social-bottom{
  display: inline;
  
}

.dot{
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-flex;
  position: relative;
  margin: 0 10px;
  left: 330px;
  top: 10px;
}

.social-icon {
  height: 12px;
  width: 12px;
  margin:5px 5px 5px 5px;
  padding: 0px 0px 0px 0px;
  display: inline-flex;
  position: relative;
  left: 0px;
  top: 0px;
  align-self: center;
}

.row-bottom{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: px;
  padding: 10px 2px 20px 2px;
}
`