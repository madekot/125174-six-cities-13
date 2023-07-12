import { Link } from 'react-router-dom';
import React from 'react';

function PageNotFound(): JSX.Element {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  };

  return (
    <div style={style}>
      <div style={{textAlign: 'center'}}>
        <h1>404 Not Found</h1>
        <Link to={'/'} style={{color: 'blue'}}>return to main page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
