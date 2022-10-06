import styled, { keyframes } from "styled-components";
import imgUrl from "../img/bglogin.jpg";
import BaseAnimation from "./Animation";

const FadeAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeAnimation};
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${imgUrl});
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WrapperContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2{
    width: 80%;
    padding: ${({theme}) => theme.spacing.medium};
    font-size: 6rem;
    font-style: italic;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: ${({theme}) => theme.spacing.large};
    @media (max-width: 768px) {
      padding: ${({theme}) => theme.spacing.small};
      font-size: ${({theme}) => theme.fontSizes.large};
  }
  }
  
  p{
    margin-bottom: 1.6rem;
    font-size: ${({theme}) => theme.fontSizes.large};
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${({theme}) => theme.fontSizes.medium};
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  input{
    width: 80%;
    padding: ${({theme}) => theme.spacing.medium};
    margin: ${({theme}) => theme.spacing.small};
    color: ${({theme}) => theme.colors.gray07};
    font-size: ${({theme}) => theme.fontSizes.large};
    border-radius: ${({theme})=> theme.radius.medium};
    text-align: center;
    opacity: 0.8;
    :focus{
      outline: none;
      background-color: ${({theme}) => theme.colors.gray03};
    }
    @media (max-width: 768px) {
      padding: ${({theme}) => theme.spacing.small};
      font-size: ${({theme}) => theme.fontSizes.medium};
  }
  }
  
  button{
    width: 80%;
    padding: ${({theme}) => theme.spacing.medium};
    margin: ${({theme}) => theme.spacing.medium};
    font-size: ${({theme}) => theme.fontSizes.large};
    border: 2px solid  ${({theme})=> theme.colors.gray07};
    border-radius: ${({theme})=> theme.radius.medium};
    color: ${({theme}) => theme.colors.gray07};
    background-color: ${({theme}) => theme.colors.black};
    :disabled{  
      opacity: 0.5;
      background-color: ${({theme}) => theme.colors.gray08};
    }
    :hover{
      cursor: pointer;
    }
    @media (max-width: 768px) {
      padding: ${({theme}) => theme.spacing.small};
      font-size: ${({theme}) => theme.fontSizes.medium};
  }
  }
  

`;