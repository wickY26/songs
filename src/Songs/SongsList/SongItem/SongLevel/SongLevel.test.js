import React from 'react';
import ReactDOM from 'react-dom';
import SongLevel from './SongLevel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongLevel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
