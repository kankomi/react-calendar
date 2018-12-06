import React from 'react';

const style = {
  loader: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  },
  loaderText: {
    margin: 'auto'
  }
};

const Loader = () => {
  return (
    <div style={style.loader}>
      <h1 style={style.loaderText}>Loading...</h1>
    </div>
  );
};

export default Loader;
