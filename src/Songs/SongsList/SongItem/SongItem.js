import React from 'react';
import Ratings from 'react-ratings-declarative';
import classes from './SongItem.module.css';
import SongLevel from './SongLevel/SongLevel';

const SongItem = ({ song, style, onRatingChange }) => {
  const { artist, level, rating, title } = song;

  return (
    <div style={style} className={classes.wrapper}>
      <div className={classes.logo} />
      <SongLevel level={level} />
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.info}>
          <div className={classes.rating}>
            <Ratings
              rating={rating}
              changeRating={(newRating) => onRatingChange(newRating, song.id)}
              widgetDimensions={'24px'}
              widgetRatedColors={'#dbeaff'}
              widgetHoverColors={'#dbeaff'}
              widgetEmptyColors={'#565c67'}
              widgetSpacings={'4'}
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings>
          </div>
          <div className={classes.artist}>{artist}</div>
        </div>
      </div>
    </div>
  )
}

export default SongItem
