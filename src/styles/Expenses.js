import styled from "styled-components";

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 350px;
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const ExpenseForm = styled.form`
  width: 100%;
  h3{
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.gray07};
    text-transform: uppercase;
  }
  label{
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: ${({ theme }) => theme.spacing.medium} 0;
  }
  input{
    width: 100%;
    background: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray03};
    border: none;
    border-radius: ${({ theme }) => theme.radius.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({theme}) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
  }
  select{
    width: 100%;
    margin: 0;
    background: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray03};
    border-radius: ${({ theme }) => theme.radius.medium};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: ${({theme}) => theme.spacing.small};
    margin-top: ${({ theme }) => theme.spacing.small};
    option{
      background: ${({ theme }) => theme.colors.gray07};
    }
  }`;

export const BtnExpense = styled.button`
  width: 100%;
  padding: ${({theme}) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.medium} 0;
  font-size: ${({theme}) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({theme}) => theme.colors.gray03};
  color: ${({theme}) => theme.colors.gray08};
  cursor: pointer;
`;