import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import classes from './Songs.module.css';
import SongsList from './SongsList/SongsList';

const Songs = () => {
  const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);
  const [hasMoreSongs, setHasMoreSongs] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const result = await axios('/songs.json');
        const songsData = result.data.map((song, index) => { return { ...song, id: index } });
        setData(songsData);
      } catch (err) {
        setError(true);
      }
    })();
  }, []);

  const content = () => {
    if (error) {
      return <div>An error is occured</div>;
    } else if (data.length) {
      return <SongsList songs={songs} loading={loading} hasMoreSongs={hasMoreSongs} loadNextSongs={loadNextSongs} height={height} onRatingChange={onRatingChange} />;
    }
  }

  const loadNextSongs = (startIndex) => {
    setLoading(true);
    // use timeout to simulate rest api call
    setTimeout(() => {
      setLoading(false);
      setSongs([...songs].concat(data.slice(startIndex, songs.length + 5)));
      setHasMoreSongs(songs.length + 5 < data.length);
    }, 1000);
  };

  const onRatingChange = (newRating, id) => {
    setSongs(songs.map(song => {
      if (song.id !== id) {
        return song;
      } else {
        return { ...song, rating: newRating };
      }
    }));
    // this is just update for original source for using updated data with filtering
    setData(data.map(song => {
      if (song.id !== id) {
        return song;
      } else {
        return { ...song, rating: newRating };
      }
    }));
  }

  return (
    <div className={classes.wrapper} ref={ref}>
      {content()}
    </div>
  )
}

export default Songs;
