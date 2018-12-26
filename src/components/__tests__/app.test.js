import React from 'react';
import { mount } from 'enzyme';
import InlineEditor from '../../container/app';

it('checks inline editor is rendered', () => {
   const wrapped = mount(<InlineEditor />);
   expect(wrapped);
});