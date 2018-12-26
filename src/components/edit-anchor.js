import React from "react";
import styled from "styled-components";

const EditAnchor = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  text-decoration: none;
`;

export default (props) => {
   return (
      <EditAnchor onClick={props.editText} href="/">
         Edit
      </EditAnchor>
   )
}
