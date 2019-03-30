import React from 'react';
import ReactDOM from 'react-dom';
import Songs from './Songs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Songs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
