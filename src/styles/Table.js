// import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';
// import { Delete } from '@styled-icons/fluentui-system-filled/Delete';
import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 16px;
  thead > tr > th {
    background-color: antiquewhite;
    padding: 8px;
    height: 40px;
    font-weight: 400;
  };
  tbody > tr > td {
    background-color: bisque;
    text-align: center;
    color: gray;
  }
`

export const BtnEditar = styled.button`
`;

export const BtnExcluir = styled.button`
`;

export const EditIcon = styled(material.Edit)`
  
`;

export const DeleteIcon = styled(material.Delete)`
  
// `;