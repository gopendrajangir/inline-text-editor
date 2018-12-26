import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
   width: 100%;
   margin-bottom: 5px;
   padding-left: 5px;
   resize: none;
   flex-grow: 1;
   font-family: sans-serif;
   padding-top: 10px;
   height: ${props => `${props.height}px`};
`;

export default (props) => {
   return (
      <TextArea
         onChange={props.onChange}
         autoFocus
         value={props.currentText}
         height={props.height}
      />
   )
}
