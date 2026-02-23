import styled from 'styled-components'

import { colors as c } from '../../styles/GlobalStyle'

export const Overlay = styled.div<{ $is_active: boolean }>`
  display: ${(props) => (props.$is_active ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background: ${c.white};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 512px;

  h3 {
    color: ${c.yellow1};
    font-size: 2rem;
    font-weight: bold;
  }

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid ${c.black};
    border-radius: 4px;
    background: ${c.white};
    color: ${c.black};
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: ${c.yellow1};
    }
  }
`
