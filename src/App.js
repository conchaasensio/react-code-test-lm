import React, { useEffect, useState } from 'react';
import getDataFromApi from './server/api';
import './App.css';

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const renderData = () => {
    const sectionsRendered = sections.map((section, index) => {
      return (
        <li className={index}>
          <p>{section.name}</p>
        </li>
      );
    });
    return <ul>{sectionsRendered}</ul>;
  };

  return <div className="App">{renderData()}</div>;
}

export default App;
