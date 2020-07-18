import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: boolean;
}
const typeToast = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #2ca42b;
    color: #fff;
  `,
  error: css`
    background: #de3b3b;
    color: #fff;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 380px;

  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.07);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => typeToast[props.type || 'info']}
  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
    p {
      color: #fff;
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}
`;
