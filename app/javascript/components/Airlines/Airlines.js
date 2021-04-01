import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then(res => {
        setAirlines(res.data.data);
      })
      .catch(res => console.log(res));
  }, [airlines.length]);

  return <div className="airlines">This is the airlines route</div>;
};

export default Airlines;
