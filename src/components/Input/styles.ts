import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  color: #373B53;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 14px 14px 14px 18px;
  width: 100%;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff4c61;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #a6acbe;
      border-color: #a6acbe;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #a6acbe;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #373B53;

    &::placeholder {
      color: #A6ACBE;
    }
  }

  svg {
    margin-right: 16px;
    color: #a6acbe;

  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0px;
  }

  span {
    background: #ff4c61;
    color: #fff;

    &::before {
      border-color: #ff4c61 transparent;
    }
  }
`;
