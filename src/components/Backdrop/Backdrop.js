import React from 'react';

const backdrop = (props) =>
  props.show ? (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: 100,
        left: 0,
        cursor: 'pointer',
        transition: 'all .5s',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      onClick={props.clicked}
    ></div>
  ) : null;

export default backdrop;
