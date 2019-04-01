import React from 'react';
import classes from './SongLevel.module.css';

const SongLevel = ({level}) => {
  const radius = 175;
  const diameter = Math.round(Math.PI * radius * 2);
  const getOffset = (val = 0) => Math.round((15 - Math.min(val, 15)) / 15 * diameter);
  const levelColor = (level) => {
    if (level > 10) {
      return '#d03f14';
    } else if (level > 5) {
      return '#d0c514'
    } else {
      return '#4fc514'
    }
  }
  
  return (
    <div className={classes.wrapper}>
      <svg width="64" height="64" viewBox="-25 -25 400 400">
        <circle stroke="#212326" cx="175" cy="175" r="175" strokeWidth="24" fill="none" />
        <circle stroke={levelColor(level)} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" strokeDasharray="1100" strokeWidth="24" strokeDashoffset="1100" strokeLinecap="round" fill="none" style={{ strokeDashoffset: getOffset(level) }} />
        {level}
        <text style={{ fontSize: '8rem' }} fill={'#fff'} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
          {level}
        </text>
      </svg>
    </div>
  )
}

export default SongLevel
