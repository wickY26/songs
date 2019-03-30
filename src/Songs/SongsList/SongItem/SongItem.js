import React from 'react';
import classes from './SongItem.module.css';

const SongItem = ({ title, style }) => {
  return (
    <div style={style} className={classes.wrapper}>
      <div className={classes.logo} />
      <div className={classes.level}></div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.info}>
          <div className={classes.rating}></div>
          <div className={classes.artist}></div>
        </div>
      </div>
    </div>
  )
}

export default SongItem
