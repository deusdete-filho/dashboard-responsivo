import styled, { css } from 'styled-components';

interface Props {
  active?: boolean;
}

export const Menu = styled.div`
  width: 100%;
  height: 100px;
  flex: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
  }
`;
export const MenuItem = styled.div`
  display: flex;
  margin: 30px;
  color: #c9ced6;
  input {
    font-size: 16px;
    color: #373b53;
    margin-left: 16px;
    background: #fff;
    border: 0;
    width: 100%;

    &::placeholder {
      color: #a6acbe;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    flex-direction: column;
    margin: 8px;
    svg {
      color: #c9ced6;
    }
    span {
      color: #000;
      font-size: 14px;
      font-weight: 500;
    }
    p {
      padding-top: 4px;

      color: #a6acbe;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  border-left: 1px solid #eff4f6;
  div {
    margin: 12px;

    svg {
      color: #c9ced6;
    }
  }
`;
