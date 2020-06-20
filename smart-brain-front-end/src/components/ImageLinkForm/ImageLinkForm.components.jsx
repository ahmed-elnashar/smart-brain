import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div className='tc'>
      <p className='t3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try..'}
      </p>
      <div className='center'>
        <div className='center pa4 br3 shadow-1'>
          <input
            className='f4 pa2 w-70 center'
            type='text'
            onChange={onInputChange}
          />
          <button
            className='w-50 grow f4 pointer link ph3 pv2 dib white bg-navy ba b--navy'
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
