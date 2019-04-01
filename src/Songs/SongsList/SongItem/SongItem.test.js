import React from 'react';
import ReactDOM from 'react-dom';
import SongItem from './SongItem';

const song = { artist: 'artist', level: '11', rating: 4, title: 'title' };
const probs = { song };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongItem {...probs} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
