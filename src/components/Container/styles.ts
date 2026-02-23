import styled from "styled-components";
import { colors as c } from "../../styles/GlobalStyle";

export const Container = styled.div`
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${c.darkYellow1};
  font-size: 3rem;
  text-align: center;
  font-weight: bold;

  span {
    color: ${c.lightYellow};
    text-decoration: underline;
  }
`

export const buttonsArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;

  .filter, .useFlats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    input {
      cursor: pointer;
    }
  }

  .scale-select {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    select {
      background-color: ${c.lightYellow};
      border: none;
      outline: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: ${c.darkYellow1};
      }
    }
  }
`
