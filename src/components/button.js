import React from "react";
import styled from "styled-components";

const Button = styled.button`
   width: 80px;
   height: auto;
   border: 1px solid #666;
   margin: 0px;
   margin-right: 5px;
   padding: 5px;
   border-radius: 2px;
   cursor: pointer;
`;

export default (props) => {
   return (
      <Button onClick={props.eventHandler}>
         {props.title}
      </Button>
   );
};
