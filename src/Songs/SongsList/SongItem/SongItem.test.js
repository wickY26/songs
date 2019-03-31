import React from 'react';
import ReactDOM from 'react-dom';
import SongItem from './SongItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
