import styled from 'styled-components'
import { colors as c } from '../../styles/GlobalStyle'

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  border-radius: 6px;
  background-color: #fff8dc;
  margin-bottom: 64px;
`

export const String = styled.ul`
  display: flex;
  justify-content: space-around;

  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 3px solid #838383ff;
    padding: 8px 12px;

    span {
      background-color: ${c.yellow1};
      border-radius: 50%;
      padding: 4px 8px;
    }

    &:first-child {
      font-weight: bold;
      background-color: ${c.white};
    }

    &:last-child {
      border-right: none;
    }
  }
`

export const Markers = styled.ul`
  display: flex;
  background: ${c.white};
  font-size: 24px;
  font-weight: bold;
  justify-content: space-around;
`
