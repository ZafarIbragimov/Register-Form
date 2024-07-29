import React from 'react'
import './Rank.css';



const Rank = ({name, entries}) => {
  return (
    <div style={{ position: 'relative', bottom: '120px'}}>
      <div className='white f3'  style={{fontSize: '50px'}}>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;