import React from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList as List } from "react-window";
import classes from './SongsList.module.css';
import SongItem from './SongItem/SongItem';
import Message from '../../Message/Message';

// check if song with given index is loaded by checking length of current data
export const isItemLoaded = (index, hasMoreSongs, songsCount) => !hasMoreSongs || index < songsCount;

// load more songs if it is not loading
export const loadMoreItems = (loading, loadNextSongs) => loading ? () => { } : loadNextSongs;

// render a song item or loading indicator.
export const content = (index, style, songs, onRatingChange, isSongLoaded) => {
  if (isSongLoaded) {
    return <SongItem song={{ ...songs[index] }} onRatingChange={onRatingChange} style={style} />;
  } else {
    return <Message style={style} message={'Loading...'} />;
  }
};

const SongsList = ({ songs, hasMoreSongs, loading, loadNextSongs, height = 600, onRatingChange }) => {
  // if there are more songs to be loaded then add an extra row for loading indicator.
  const itemCount = hasMoreSongs ? songs.length + 1 : songs.length;

  return (
    !itemCount ?
    <Message message={'No songs were found!'} />
    :
    <InfiniteLoader
      isItemLoaded={(index) => isItemLoaded(index, hasMoreSongs, songs.length)}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems(loading, loadNextSongs)}
    >
      {({ onItemsRendered, ref }) => (
        <List
          className={classes.list}
          itemCount={itemCount}
          itemSize={146}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={'%100'}
          height={height}
        >
          {({ index, style }) => content(index, style, songs, onRatingChange, isItemLoaded(index, hasMoreSongs, songs.length))}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default SongsList
