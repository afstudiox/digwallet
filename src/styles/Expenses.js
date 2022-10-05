import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding: 16px;
`;

export const ExpenseForm = styled.form`
  width: 100%;
  border: 1px solid red;
  label{
    display: flex;
    flex-direction: column;
    margin: 12px 0;
  }
  input{
    width: 100%;
    border: 1px solid gray;
    border-radius: 4px;
    height: 32px;
  }
  select{
    width: 100%;
    border: 1px solid gray;
    margin: 0;
    height: 32px;
  }
`;

export const BtnExpense = styled.button`
  width: 100%;
  height: 32px;
  margin: 12px 0;
`;