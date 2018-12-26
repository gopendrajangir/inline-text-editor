import React from 'react';
import styled from 'styled-components';

import Text from './text';
import EditAnchor from './edit-anchor';

export const SavedText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 100%;
  width: 100%;
`;

export let textProps;

export default (props) => {
   return (
      <SavedText>
         <Text
            truncate={props.truncate}
            isTruncated={props.isTruncated}
            isTruncable={props.isTruncable}
            truncateText={props.truncateText}
            previousText={props.previousText}
            showMore={props.showMore}
            showLess={props.showLess}
         />
         <EditAnchor editText={props.editText} />
      </SavedText>
   );
}