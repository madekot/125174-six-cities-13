import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import React from 'react';

function ErrorPage(): JSX.Element {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  };

  return (
    <div style={style}>
      <h1 style={{textAlign: 'center'}}>Oops, something went wrong</h1>
      <Link to={AppRoute.Main} style={{color: 'blue'}}>
        Let&apos;s go back to the main page
      </Link>
    </div>
  );
}

export default ErrorPage;
