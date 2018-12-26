import React from "react";
import styled from "styled-components";

import TextArea from "./textarea";
import Button from './button';

const Editor = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-wrap: wrap;
   padding: 5px;
   margin: 0px;
   height: 100%;
   width: 100%;
`;

export default (props) => {
   return (
      <Editor>
         <TextArea currentText={props.currentText} onChange={props.onChange} />
         <Button eventHandler={props.onCancel} title="Cancel" />
         <Button eventHandler={props.onSave} title="Save" />
      </Editor>
   )
}
