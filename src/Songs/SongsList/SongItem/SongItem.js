import React from 'react';
import classes from './SongItem.module.css';

const SongItem = ({ song, style }) => {
  const {artist, level, rating, title} = song;
  const radius = 175;
  const diameter = Math.round(Math.PI * radius * 2);
  const getOffset = (val = 0) => Math.round((15 - Math.min(val, 15)) / 15 * diameter);

  return (
    <div style={style} className={classes.wrapper}>
      <div className={classes.logo} />
      <div className={classes.level}>
        <svg width="64" height="64" viewBox="-25 -25 400 400">
          <circle stroke="#212326" cx="175" cy="175" r="175" strokeWidth="24" fill="none" />
          <circle stroke="#4fc514" transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth="24" strokeDashoffset="1100" strokeLinecap="round" fill="none" style={{ strokeDashoffset: getOffset(level) }} />
          {level}
          <text style={{ fontSize: '8rem' }} fill={'#fff'} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
            {level}
          </text>
        </svg>
      </div>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.info}>
          <div className={classes.rating}>{rating}</div>
          <div className={classes.artist}>{artist}</div>
        </div>
      </div>
    </div>
  )
}

export default SongItem
