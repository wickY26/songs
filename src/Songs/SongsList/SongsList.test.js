import React from 'react';
import ReactDOM from 'react-dom';
import SongsList from './SongsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongsList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
