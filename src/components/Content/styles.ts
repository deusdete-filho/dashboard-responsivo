import styled from 'styled-components';
import { shade } from 'polished';

export const Cont = styled.div`
  display: flex;
  margin: 30px;
  flex-direction: column;
  header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      h1 {
        font-weight: 500;
        font-size: 30px;
        color: #000;
        margin-bottom: 8px;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        color: #a6acbe;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin: 10px;

    header {
      display: none;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 50px;
  padding: 16px;
  color: #fff;
  background: #6f52ed;
  border: 0;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  svg {
    color: #fff;
    margin-right: 8px;
  }
  :hover {
    background: ${shade(0.1, '#6f52ed')};
  }
`;
export const ButtonClean = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 50px;
  padding: 16px;
  color: #6f52ed;
  background: transparent;
  border: 2px solid #dadce5;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;

  svg {
    color: ##fff;
    margin-right: 8px;
  }
  :hover {
    background: ${shade(0.01, '#DADCE5')};
  }
`;
