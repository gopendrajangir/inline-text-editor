import React from 'react';
import { mount } from 'enzyme';
import InlineEditor from '../../container/app';
import Editor from '../editor';

describe('Editor having TextArea', () => {

   it('checks editor is not rendered initially', () => {
      const wrapped = mount(<InlineEditor />);
      expect(wrapped.find(Editor).length).toEqual(0);
   });
   
})