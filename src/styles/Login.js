import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;

export const WrapperContainer = styled.div`
  border: 1px solid black;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 80%;
    padding: 8px;
    margin: 8px;
    text-align: center;

  }
  
  button{
    width: 80%;
    padding: 8px;
    margin: 8px;
  }
  h2{
    padding: 8px;
  }
  p{
    margin-bottom: 16px;
    font-size: smaller;
  }
`;