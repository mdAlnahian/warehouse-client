import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
      <div>
        <Spinner
          className="spin mx-auto d-flex justify-content-center align-items-center"
          animation="grow"
        />
      </div>
    );
};

export default Loading;