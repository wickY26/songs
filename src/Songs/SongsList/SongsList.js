import React from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList as List } from "react-window";
import classes from './SongsList.module.css';
import SongItem from './SongItem/SongItem';

const SongsList = ({ songs, hasMoreSongs = false, loading = false, loadNextSongs, height = 600 }) => {
  // if there are more songs to be loaded then add an extra row for loading indicator.
  const itemCount = hasMoreSongs ? songs.length + 1 : songs.length;
  // load more songs if it is already loading
  const loadMoreItems = loading ? () => { } : loadNextSongs;
  // check if song with given index is loaded by checking length of current data
  const isItemLoaded = index => !hasMoreSongs || index < songs.length;
  // render a song item or loading indicator.
  const Item = ({ index, style }) => {
    if (isItemLoaded(index)) {
      return <SongItem title={songs[index].title} style={style} />;
    } else {
      return <div style={style}>Loading...</div>;
    }
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
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
          {Item}
        </List>
      )}
    </InfiniteLoader>
  )
}

export default SongsList
