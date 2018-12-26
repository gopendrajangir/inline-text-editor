import React from 'react';
import { mount } from 'enzyme';
import InlineEditor from '../../container/app';
import { editText } from '../../container/app';
import EditAnchor from '../edit-anchor';
import Editor from '../editor';

const wrapped = mount(<InlineEditor />);
const edit = mount(<EditAnchor editText={editText} />);

edit.simulate('click');
wrapped.update();

it('checks editor is rendered after clicking edit anchor', () => {
   expect(wrapped.find(Editor).length).toEqual(1);
});