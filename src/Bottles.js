import React, { useState, useEffect } from 'react';
import './Bottles.css';
import spices from './spicesData';

export default function Bottles() {
  const [spiceList, setSpiceList] = useState([]);

  // Load state from localStorage on component mount
   useEffect(() => {
    const storedState = localStorage.getItem('spiceList');
    if (storedState) {
      setSpiceList(JSON.parse(storedState));
    } else {
      setSpiceList(spices);
    }
  }, []); 

  // Update state and save to localStorage when changes occur
  const manageClick = (spiceId) => {
    const updatedSpiceList = spiceList.map((spice) => {
      if (spice.id === spiceId) {
        return {
          ...spice,
          gotIt: !spice.gotIt,
        };
      }
      return spice;
    });

    setSpiceList(updatedSpiceList);
    localStorage.setItem('spiceList', JSON.stringify(updatedSpiceList));
  }; 

  const renderedSpiceList = spiceList.map((spice) => (
    <div
      key={spice.id}
      className={spice.gotIt ? 'bottleColor' : 'bottle'}
      onClick={() => manageClick(spice.id)}
    >
      <p className="bottle-text">{spice.name}</p>
    </div>
  ));

  return <div className="bottle-container">{renderedSpiceList}</div>;

  }

  