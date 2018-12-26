import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
   margin-left: 20px;
   text-decoration: none;
`;

export default (props) => {
   return(
      <Anchor onClick={props.handler} href="/">
         {props.title}
      </Anchor>
   )
}