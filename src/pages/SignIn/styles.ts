import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;

  a {
    color: #464646;
    font-weight: 700;
    display: block;
    margin-top: 20px;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 0px;
    }
  }
`;
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

export const AimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${aparecer} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      font-size: 16px;
    }
    button {
      width: 100%;
      margin-top: 20px;
    }
    a {
      font-weight: 700;
      display: block;
      margin-top: 20px;
      color: #b7b7b7;
      &:hover {
        color: ${shade(0.2, '#B7B7B7')};
      }
    }
  }
`;
