import styled from 'styled-components'
import { colors as c, breakpoints as b } from '../../styles/GlobalStyle'

export const Container = styled.div`
  min-width: 800px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  border-radius: 6px;
  background-color: #fff8dc;
  margin-bottom: 64px;

  @media (max-width: ${b.tablet}) {
    width: 100vw;
  }
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
    padding: 8px 0;

    &.wrongNote span {
      background-color: ${c.grey};
    }

    span {
      background-color: ${c.yellow1};
      border-radius: 50%;
      padding: 4px 8px;

      @media (max-width: ${b.tablet}) {
        padding: 4px;
      }
    }

    &:first-child {
      font-weight: bold;
      background-color: ${c.white};

      span {
        background-color: ${c.black};
        color: ${c.yellow1};
      }
    }

    &:last-child {
      border-right: none;
    }

    @media (max-width: ${b.mobile}) {
      padding: 4px 0;
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
