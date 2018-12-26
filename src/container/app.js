import React from 'react';
import PropTypes from 'prop-types';

import SavedText from '../components/saved-text';
import Editor from '../components/editor';

const wrapper = {
  backgroundColor: 'white',
  boxShadow: '0 0 5px silver',
  borderRadius: '3px',
  margin: '30px 20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export function getCurrentText() {
  return this.state.currentText;
}

export function onCancel() {
  this.setState({
    currentText: this.state.previousText,
    edit: false,
  });
}

export function onSave() {
  this.props.onSave();
  this.setState({
    previousText: this.state.currentText,
    edit: false,
    isTruncated:
    isTruncable(this.state.currentText) && this.props.truncate,
    isTruncable: isTruncable(this.state.currentText),
  });
}

export function editText(event) {
  event.preventDefault();
  this.setState({ edit: true });
}

export function onChange(event) {
  this.setState({ currentText: event.target.value });
}

export function showMore(event) {
  event.preventDefault();
  this.setState({ isTruncated: false });
}

export function showLess(event) {
  event.preventDefault();
  this.setState({ isTruncated: true });
}

export function truncateText(text) {
  this.isTruncated = true;
  return `${text.substring(0, this.props.charLimit)}...`;
}

export function isTruncable(text) {
  if (text.length > this.props.charLimit) {
    return true;
  }
  return false;
}

export default class InlineEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousText: this.props.text,
      currentText: this.props.text,
      edit: false,
      isTruncable: false,
      isTruncated: false,
    };
    
    editText = editText.bind(this);
    onChange = onChange.bind(this);
    onCancel = onCancel.bind(this);
    onSave = onSave.bind(this);
    truncateText = truncateText.bind(this);
    isTruncable = isTruncable.bind(this);
    showMore = showMore.bind(this);
    showLess = showLess.bind(this);
    getCurrentText = getCurrentText.bind(this);
  }
  
  componentDidMount() {
    if (isTruncable(this.state.previousText) && this.props.truncate) {
      this.setState({ isTruncated: true, isTruncable: true });
    }
  }

  render() {
    return (
      <div
      style={
        {
          ...wrapper,
          minHeight: this.state.edit ? 'auto' : `${this.props.height}px`,
            width: `${this.props.width}px`            
          }
        }
      >
        {this.state.edit ? (
          <Editor
            onCancel={onCancel}
            onSave={onSave}
            onChange={onChange}
            currentText={this.state.currentText}
          />
        ) : (
          <SavedText
            truncate={this.props.truncate}
            isTruncated={this.state.isTruncated}
            isTruncable={this.state.isTruncable}
            previousText={this.state.previousText}
            truncateText={truncateText}
            showMore={showMore}
            showLess={showLess}
            editText={editText}
          />
        )}
      </div>
    );
  }
}

InlineEditor.defaultProps = {
  height: 50,
  width: 500,
  text: 'No text yet',
  truncate: false,
  charLimit: 20,
};

InlineEditor.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  text: PropTypes.string,
  truncate: PropTypes.bool,
  charLimit: PropTypes.number,
};
