import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30rem;
  padding: 1.6rem;
`;

export const ExpenseForm = styled.form`
  width: 100%;
  border: 1px solid red;
  label{
    display: flex;
    flex-direction: column;
    margin: 1.2rem 0;
  }
  input{
    width: 100%;
    border: 1px solid gray;
    border-radius: 0.4rem;
    height: 3.2rem;
  }
  select{
    width: 100%;
    border: 1px solid gray;
    margin: 0;
    height: 3.2rem;
  }
`;

export const BtnExpense = styled.button`
  width: 100%;
  height: 3.2rem;
  margin: 1.2rem 0;
  font-size: 1rem;
  cursor: pointer;
`;