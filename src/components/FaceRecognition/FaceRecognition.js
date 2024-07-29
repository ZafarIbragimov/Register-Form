import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma' style={{ position: 'relative', bottom: '150px' }}>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} width='600px' heigh='auto' />

        {
          boxes.map((box, index) => <div className='bounding-box' key={index} style={{
            top: box.topRow, right: box.rightCol,
            bottom: box.bottomRow, left: box.leftCol
          }}></div>)
        }

      </div>
    </div>
  );
}

export default FaceRecognition;

