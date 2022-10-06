import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1.6rem;
  thead > tr > th {
    background-color: antiquewhite;
    padding: 0.8rem;
    height: 4rem;
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
