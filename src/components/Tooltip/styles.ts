import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #dc7121;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50px);

    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #dc7121 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 60%;
      transform: translateX(-50px);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
