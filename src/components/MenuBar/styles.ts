import styled, { css } from 'styled-components';

interface Props {
  active?: boolean;
}
export const Logo = styled.div`
  flex: 1;
  background: #713bdb;
  width: 100%;
  height: 100px;
`;
export const Menu = styled.div`
  background: #373b53;
  flex: 1;

  height: 100vh;
  height: 100%;
`;
export const MenuItem = styled.div``;
export const MenuItemText = styled.div<Props>`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 26px;
  div {
    cursor: pointer;
    padding: 13px;

    ${(props) =>
      props.active &&
      css`
        background: #fff;
        border-radius: 5px;
        color: #713bdb;
      `}

    svg {
      color: #969cba;
      ${(props) =>
        props.active &&
        css`
          color: #713bdb;
        `}
    }
    &:hover {
      background: #fff;
      border-radius: 5px;
      transition: background-color 0.2s;
      svg {
        color: #713bdb;
        transition: background-color 0.2s;
      }
    }
  }
`;
export const MenuItemContent = styled.div`
  flex: 1;
  cursor: pointer;
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid #f1f1f1;

  &:hover {
    font-weight: bold;
  }
`;
export const Content = styled.div`
  flex: 1;
`;
