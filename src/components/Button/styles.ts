import styled from 'styled-components'

import { colors as c } from '../../styles/GlobalStyle'

export const Btn = styled.button`
  background: ${c.yellow1};
  color: #313131;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 1rem;
  cursor: pointer;
  width: 256px;
  transition: all ease .2s;

  &:hover {
    background: ${c.darkYellow2};
    scale: 1.05;
  }
`
