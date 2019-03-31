import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import classes from './Songs.module.css';
import SongsList from './SongsList/SongsList';
import SongsFilter from './SongsFilter/SongsFilter';

const Songs = () => {
  const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filter, setFilter] = useState({ searchKey: '', level: 0 });
  const [hasMoreSongs, setHasMoreSongs] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  });

  useEffect(() => {
    if (data.length) {
      filterSongs(5, filter.searchKey, filter.level);
    }
  }, [filter]);

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
    filterSongs(startIndex + 5, filter.searchKey, filter.level);
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

  const filterSongs = (endIndex, searchKey = '', level = 0) => {
    setLoading(true);
    // use timeout to simulate rest api call
    setTimeout(() => {
      const filteredSongs = data.filter(song => {
        if (song.title.toUpperCase().includes(searchKey.toUpperCase()) || song.artist.toUpperCase().includes(searchKey.toUpperCase())) {
          return !level || song.level === level;
        } else {
          return false;
        }
      });
      setLoading(false);
      setSongs(filteredSongs.slice(0, endIndex));
      setHasMoreSongs(endIndex < filteredSongs.length);
    }, 1000);
  }

  return (
    <div className={classes.wrapper} ref={ref}>
      <SongsFilter onFilterChange={setFilter} />
      {content()}
    </div>
  )
}

export default Songs;
