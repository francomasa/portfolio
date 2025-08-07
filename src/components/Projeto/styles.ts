
import styled from "styled-components"
import { Theme } from "../../themes/dark";

export const Card = styled.div`
  border: 1px solid ${(props) => (props.theme as Theme).corDaBordaCard};
  padding: 16px;
`

export const LinkBatao = styled.a `
  color: ${(props) => (props.theme as Theme).corDeFundo};
  font-size: 14px;
  background-color: ${(props) => (props.theme as Theme).corDeFondoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
