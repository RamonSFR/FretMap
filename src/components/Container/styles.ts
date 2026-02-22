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
