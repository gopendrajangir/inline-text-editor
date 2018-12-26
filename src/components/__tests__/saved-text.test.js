import React from 'react';
import { mount } from 'enzyme';
import InlineEditor from '../../container/app';
import SavedText from '../saved-text';

describe('Saved Text', () => {

   it('checks savedtext is rendered', () => {
      const wrapped = mount(<InlineEditor />);
      expect(wrapped.find(SavedText).length).toEqual(1);
   });
   
})