import styled from "styled-components";

export const GeneralContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: ${({theme}) => theme.spacing.medium};
  thead > tr > th {
    background-color: ${({theme}) => theme.colors.gray03};
    color: ${({theme}) => theme.colors.gray08};
    padding: ${({theme}) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-size: 1.3rem;
  };
  tbody > tr > td {
    background: ${({ theme }) => theme.colors.gray08};
    padding: ${({theme}) => theme.spacing.small};
    color: ${({ theme }) => theme.colors.gray03};
    text-align: center;
    font-size: 1.2rem;
  }
`;

export const BtnEditar = styled.button`
  width: 40%;
  margin-right: 1rem;
  padding: ${({theme}) => theme.spacing.small};
  font-size: 1.2rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({theme}) => theme.colors.gray03};
  color: ${({theme}) => theme.colors.gray08};
  cursor: pointer;
`;

export const BtnExcluir = styled.button`
  width: 40%;
  padding: ${({theme}) => theme.spacing.small};
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.radius.medium};
  border: none;
  background-color: ${({theme}) => theme.colors.gray03};
  color: ${({theme}) => theme.colors.gray08};
  cursor: pointer;
`;
