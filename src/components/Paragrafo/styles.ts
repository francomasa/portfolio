import styled from 'styled-components'
//import {} from '.index' mesmo resultado
import { Props } from '.';

export const P = styled.p<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282A35' : '#949494')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`;
