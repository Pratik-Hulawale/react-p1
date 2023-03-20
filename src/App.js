import React from 'react';
import './style.css';
import Tab from '../Components/Tab.js';
import Data from '../Data.json';
export default function App() {
  return (
    <div>
      {Data.map((e, i) => {
        return <Tab name={e.name + ' ' + e.last_name} email={e.email} />;
      })}
    </div>
  );
}
