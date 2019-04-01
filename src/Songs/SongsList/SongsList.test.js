import React from 'react';
import ReactDOM from 'react-dom';
import SongsList, { isItemLoaded, loadMoreItems, content } from './SongsList';
import SongItem from './SongItem/SongItem';
import Message from '../../Message/Message';

const props = {
  songs: [],
  hasMoreSongs: false,
  loading: false,
  loadNextSongs: false,
  height: 600,
  onRatingChange: jest.fn()
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SongsList {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should be loaded when there is no more songs to fetch', () => {
  expect(isItemLoaded(null, false, null)).toBeTruthy();
});

it('should be loaded when there song index is less than total number of songs', () => {
  expect(isItemLoaded(1, true, 2)).toBeTruthy();
});

it('should be not loaded when there are songs to fetch and song index is more than total number of songs', () => {
  expect(isItemLoaded(3, true, 2)).toBeFalsy();
});

it('should return an empty function while loading', () => {
  expect(loadMoreItems(true, null)).toBeInstanceOf(Function);
});

it('should return given function while not loading', () => {
  const loadFunction = jest.fn();
  expect(loadMoreItems(false, loadFunction)).toEqual(loadFunction);
});

it('should return loading indicator when item is not loaded', () => {
  expect(content(null, null, null, null, false)).toEqual(<Message style={null} message={'Loading...'} />);
});

it('should return SongItem when item is loaded', () => {
  const songs = [{}];
  const index = 0;
  expect(content(0, null, [{}], null, true)).toEqual(<SongItem song={{ ...songs[index] }} onRatingChange={null} style={null} />);
});
