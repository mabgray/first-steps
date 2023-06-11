import React, { useState } from 'react';
import './Bottles.css';
import spices from './spicesData';

export function Bottles() {
  const [spiceList, setSpiceList] = useState(spices);

  const manageClick = (spiceId) => {
    const updatedSpiceList = spiceList.map(spice => {
      if (spice.id === spiceId) {
        return {
          ...spice,
          gotIt: !spice.gotIt
        };
      }
      return spice;
    });

    setSpiceList(updatedSpiceList);
  };

  const renderedSpiceList = spiceList.map(spice => (
    <div
      key={spice.id}
      className={spice.gotIt ? "bottleColor" : "bottle"}
      onClick={() => {
        manageClick(spice.id);
      }}
    >
      <p className="bottle-text">{spice.name}</p>
    </div>
  ));

  return (
    <div className="bottle-container">
      {renderedSpiceList}
    </div>
  );
}

