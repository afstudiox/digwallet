import styled from "styled-components";

export const GeneralContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing.medium};  
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.medium};  
  align-items: center;
  width: ${props => props.width ? `${props.width}px` : "auto"};
  

  figure{
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.small};  
    margin-right: ${({ theme }) => theme.spacing.large};  
    scale: 1.6;
    background-color: none;
    border-radius: 50%;
  }

  h1{
    font-size: 4rem;
    font-style: italic;
  }

  p{
    padding: 0 ${({ theme }) => theme.spacing.medium};
    font-size: ${({ theme }) => theme.fontSizes.large};
    span{
      margin: 0 ${({ theme }) => theme.spacing.medium};;
      font-size: ${({ theme }) => theme.fontSizes.large};
      color: ${({ theme }) => theme.colors.gray07};
    }
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const UserField = styled.div`
  color: ${({ theme }) => theme.colors.gray07};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-style: italic;
`;
