import styled, { keyframes } from 'styled-components';
const aparecer = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section1 = styled.div`
  animation: ${aparecer} 1s;

  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  grid-template-areas: 'a  b c';

  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
  div {
    display: flex;

    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    flex-direction: column;
    box-shadow: 0px 4px 0px 0px rgba(150, 156, 186, 0.2);

    header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 70px;
      border-bottom: 1px solid #eef0f6;
      justify-content: space-between;
      span {
        margin: 12px;
        font-size: 14px;
        font-weight: 700;
        color: #000;
      }
      label {
        display: flex;

        justify-content: center;
        align-items: center;
        margin: 16px;
        font-size: 14px;
        color: #a6acbe;
      }
    }
    section {
      padding: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      margin-bottom: 8px;
      box-shadow: 0px 0px 0px 0px rgba(150, 156, 186, 0.2);
    }
  }
`;

export const Section2 = styled.div`
  animation: ${aparecer} 1s;

  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  grid-template-areas: 'a  b';

  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  div {
    display: flex;

    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    flex-direction: column;

    box-shadow: 0px 4px 0px 0px rgba(150, 156, 186, 0.2);

    header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 70px;
      border-bottom: 1px solid #eef0f6;
      justify-content: space-between;
      span {
        margin: 12px;
        font-size: 14px;
        font-weight: 700;
        color: #000;
      }
      label {
        display: flex;

        justify-content: center;
        align-items: center;
        margin: 16px;
        font-size: 14px;
        color: #a6acbe;
      }
    }
  }
  @media screen and (max-width: 768px) {
    div {
      margin-bottom: 8px;
      box-shadow: 0px 0px 0px 0px rgba(150, 156, 186, 0.2);
    }
  }
`;

export const ListPerfil = styled.section`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
  border-right: 2px solid #fff;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 14px;
      color: #a6acbe;
      padding-left: 8px;
    }
    h2 {
      margin: 8px;
    }
  }
  &:hover {
    border-right: 2px solid #dadce4;
    transition: border-right 0.2s;
  }
`;
export const ListDados = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 500;
      font-size: 14px;
      color: #a6acbe;
      padding-left: 8px;
    }
    h2 {
      font-size: 14px;
      margin: 8px;
    }
  }
`;
