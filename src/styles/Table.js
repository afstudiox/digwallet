import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 5px solid green;
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
`;

export const BtnEditar = styled.button`
`;

export const BtnExcluir = styled.button`
`;
