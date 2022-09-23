import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;

export const HeaderContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  padding: 16px;
  align-items: center;

  figure{
    text-decoration: none;
    padding: 8px;
    margin-right: 8px;
    background-color: black;
    border-radius: 50%;
  }

  p{
    padding: 0 16px;
    border: 1px solid grey ;
    span{
      margin: 0 16px;
      border: 1px solid grey ;
    }
  }
`;

export const UserField = styled.p`
  background-color: grey;
  border-radius: 8px;
  padding: 16px 0;
  margin: 0 16px
`;