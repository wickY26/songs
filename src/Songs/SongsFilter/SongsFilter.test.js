import React from 'react';
import ReactDOM from 'react-dom';
import SongsFilter from './SongsFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongsFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
