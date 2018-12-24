import React from 'react';
import ReactDOM from 'react-dom';

import InlineEditor from './components/inline-editor';

class AppWrapper extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));