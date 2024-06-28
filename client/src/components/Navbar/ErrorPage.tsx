import React from 'react';
import { useRouteError } from 'react-router-dom';
import './404.css'; 

function ErrorPage(): JSX.Element {
  const error: { statusText: string; message: string } = useRouteError() as {
    statusText: string;
    message: string;
  };
  console.error(error);

  return (
    <div id="error-page" className="error-container">
      <img src='./404.png' alt='404' className="error-image" />
    </div>
  );
}

export default ErrorPage;
