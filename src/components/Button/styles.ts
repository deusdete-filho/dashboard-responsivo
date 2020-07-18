import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  cursor: pointer;
  color: #fff;
  height: 45px;
  width: 100%;
  background: #373b53;
  border: 0;
  border-style: solid;
  border-radius: 5px;
  font-size: 16px;

  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.1, '#373b53')};
  }
`;
