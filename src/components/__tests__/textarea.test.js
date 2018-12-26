import React from 'react';
import { mount } from 'enzyme';
import TextArea from '../textarea';
import EditAnchor from '../edit-anchor';

import InlineEditor from '../../container/app';
import { editText } from '../../container/app';
import { onChange } from '../../container/app';
import { getCurrentText } from '../../container/app';

describe('On save and on Cancel', () => {
   const wrapped = mount(
      <InlineEditor 
         height={50}
         width={600}
         text="So, this is the default text"
         truncate
         charLimit={20}
         onSave={() => {
            console.log('Saved');
         }}
      />
   );
   const edit = mount(<EditAnchor editText={editText} />);
   
   edit.simulate('click');
   wrapped.update();
   
   it('checks textarea updates on changing value', () => {
      const textarea = mount(<TextArea currentText={getCurrentText()} onChange={onChange}/>);
      textarea.simulate('change', {
         target: {value: "Text"}
      });
      wrapped.update();

      expect(wrapped.find('textarea').prop('value')).toEqual('Text');
   });
})