import React from 'react';
import './FaceRecognition.styles.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma' style={{ height: '300px' }}>
      <div className='mt2 absolute'>
        <img
          id='inputImage'
          src={imageUrl}
          alt=''
          width='500px'
          height='auto'
        />
        <div
          className='bounding-box'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
