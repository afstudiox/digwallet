import styled from "styled-components";
import { Edit } from '@styled-icons/boxicons-solid/Edit';
import { Trash } from '@styled-icons/boxicons-solid/Trash';

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
  margin-right: 1rem;
  padding: ${({theme}) => theme.spacing.small};
  border: none;
  background: ${({ theme }) => theme.colors.gray08};
  color: ${({theme}) => theme.colors.gray08};
  cursor: pointer;
`;

export const BtnExcluir = styled.button`
  padding: ${({theme}) => theme.spacing.small};
  border: none;
  background: ${({ theme }) => theme.colors.gray08};
  color: ${({theme}) => theme.colors.gray08};
  cursor: pointer;
`;

export const EditIcon = styled(Edit)`
  color: ${({theme}) => theme.colors.gray01};
`

export const DeleteIcon = styled(Trash)`
  color: ${({theme}) => theme.colors.gray01};
`
