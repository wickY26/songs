import React from 'react';
import classes from './SongsList.module.css';

const SongsList = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.songs.map(song => <div>{song.title}</div>)}
    </div>
  )
}

export default SongsList
