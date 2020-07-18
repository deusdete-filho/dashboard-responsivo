import styled, { keyframes } from 'styled-components';
const aparecer = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Container = styled.div`
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(55, 59, 83, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentHeader = styled.div`
  top: 100%;
  left: 100%;
`;

export const Content = styled.div`
  animation: ${aparecer} 1s;

  h2 {
    display: flex;
    align-items: center;
  }
  p {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  border-right: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 7px 14px 0 rgba(50, 50, 93, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.07);
  background: #dfe1eb;
  width: 500px;
  padding: 40px;
  & > div {
    width: 100%;
    display: block;
  }
  div {
    button {
      flex: 1;
      flex-direction: row;
      margin-top: 10px;
      margin-right: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 20px;
  }
`;
