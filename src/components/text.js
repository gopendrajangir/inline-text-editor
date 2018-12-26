import React from 'react';
import styled from 'styled-components';

import Anchor from './anchor';

const Text = styled.p`
   height: 100%;
`;

export default (props) => {
   return (
      <Text>
         {props.truncate && props.isTruncated
            ? props.truncateText(props.previousText)
            : props.previousText}
         {props.truncate &&
         props.isTruncable &&
         props.isTruncated ? (
            <Anchor handler={props.showMore} title="Show More"/>
            ) : null}
         {props.truncate &&
         props.isTruncable &&
         !props.isTruncated ? (
            <Anchor handler={props.showLess} title="Show Less"/>
         ) : null}
      </Text>
   )
}
