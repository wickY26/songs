import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Songs.module.css';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const result = await axios('/songs.json');
        setLoading(false);
        setSongs([...result.data]);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  const content = () => {
    if (error) {
      return <div>An error is occured</div>;
    } else if (loading) {
      return <div>Loading...</div>;
    } else {
      return songs.map(song => <div>{song.title}</div>);
    }
  }

  return (
    <div className={classes.wrapper}>
      {content()}
    </div>
  )
}

export default Songs;
