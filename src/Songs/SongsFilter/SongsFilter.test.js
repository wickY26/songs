import React from 'react';
import ReactDOM from 'react-dom';
import SongsFilter from './SongsFilter';

const filterChange = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongsFilter onFilterChange={filterChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
